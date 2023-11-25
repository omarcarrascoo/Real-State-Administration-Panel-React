import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import axios from "axios";
import StatusBtn from "../../components/statusBtn/StatusBtn";
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
    console.log(id);
    try {
      const localStorageValue = localStorage.getItem("persist:root");
      const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
      const user = parsedValue.user || "";
      const currentUser = user ? JSON.parse(user).currentUser : {};
      const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
      const response = await axios.delete(`https://industrylux.com/api/industrialProperties/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        token: `Bearer ${TOKEN}`,
      },
    });
    setUsers(users.filter((item) => item.id !== id));
  } catch (error) {
    console.log('Error updating data:', error);
  }
    
  };
  console.log(users);
  const columns = [
    { field: "id", headerName: "ID", width: 190 },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/panel/imageUploader/" + params.row.id}>
              <button className="productListEdit">Add Images</button>
            </Link>
            <Link to={"/panel/editProperty/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            <StatusBtn/>
          </>
        );
      },
    },
    { field: "posicionListado", headerName: "Internal Key", width: 150 },
    {
      field: "product",
      headerName: "Product",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImgSpecial" src={`https://industrylux.com/${params.row.imgRoute[0]}`} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "fullUrl", headerName: "URL", width: 1000 },
    
  ];
 
  return (
    <div className="productList">
      <div className="addNewBtn">
     <Link to="/panel/addProperty">
        <button>Add New</button>
      </Link>
      </div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={100}
        // checkboxSelection
      />
    </div>
  );
}
