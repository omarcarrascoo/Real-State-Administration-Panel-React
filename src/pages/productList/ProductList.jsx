import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import axios from "axios";
export default function ProductList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
  try {
    const res = await userRequest.get("industrialProperties");
    const updatedUsers = res.data.map((user) => ({
      id: user._id, // Assuming the id is available as _id
      ...user,
    }));
    setUsers(updatedUsers);
  } catch (error) {
    console.log(error);
  }
};
    getUsers()
  }, []);
  const handleDelete = async (id) => {
    try {
      const localStorageValue = localStorage.getItem("persist:root");
      const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
      const user = parsedValue.user || "";
      const currentUser = user ? JSON.parse(user).currentUser : {};
      const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
    const response = await axios.delete(`http://174.138.95.49/api/industrialProperties/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        token: `Bearer ${TOKEN}`,
      },
    });
  } catch (error) {
    console.log('Error updating data:', error);
  }
    setUsers(users.filter((item) => item.id !== id));
  };
  console.log(users);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImgSpecial" src={`http://174.138.95.49/${params.row.imgRoute[0]}`} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "h1", headerName: "Title", width: 200 },
    {
      field: "urlProperty",
      headerName: "URL",
      width: 160,
      color: "#fff",
    },
    {
      field: "urlCountry",
      headerName: "Country Url",
      width: 120,
    },
    {
      field: "urlProvince",
      headerName: "Province Url",
      width: 120,
    },
    {
      field: "urlCity",
      headerName: "Development Url",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/imageUploader/" + params.row.id}>
              <button className="productListEdit">Add Images</button>
            </Link>
            <Link to={"/editProperty/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="addNewBtn">
     <Link to="addProperty">
        <button>Add New</button>
      </Link>
      </div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={14}
        checkboxSelection
      />
    </div>
  );
}
