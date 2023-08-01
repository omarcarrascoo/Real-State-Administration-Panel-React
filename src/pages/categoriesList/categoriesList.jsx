import "./categoriesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { userRequest } from "../../requestMethods";
export default function CategoriesList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
  try {
    const res = await userRequest.get("categories");
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
  console.log(users);
  const handleDelete = async (id) => {
    try {
      const localStorageValue = localStorage.getItem("persist:root");
      const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
      const user = parsedValue.user || "";
      const currentUser = user ? JSON.parse(user).currentUser : {};
      const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
    const response = await axios.delete(`http://localhost:1337/api/categories/${id}`, {
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
  
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "categoryTitle", headerName: "Category Name", width: 200 },
    {
      field: "urlCategory",
      headerName: "URL",
      width: 120,
    },
    { field: "h1", headerName: "H1", width: 150 },
    { field: "h2", headerName: "H2", width: 150 },
    { field: "p", headerName: "Descripcion larga", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/panel/editCategory/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
       <div className="addNewBtn">
        <Link to="/panel/addCategory"><button>Add New</button></Link>
      </div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
