import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

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
  const handleDelete = (id) => {
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
            <img className="productListImgSpecial" src={`http://LOCALHOST:8000/assets/images/${params.row.imgRoute}`} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "h1ES", headerName: "Title", width: 200 },
    {
      field: "urlEs",
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
      field: "cityUrl",
      headerName: "City Url",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editProvince/" + params.row.id}>
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
