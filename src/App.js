import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import CountryList from "./pages/countryList/countryList";
import ProvinceList from "./pages/provinceList/provinceList";
import CityList from "./pages/cityList/cityList";
import CategoriesList from "./pages/categoriesList/categoriesList";
import CategoriesPageList from "./pages/categoryPageList/categoriesPageList";
import UpdateCountry from "./pages/country/countryUpdate";
import UpdateUser from "./pages/user/updateUser";
import UpdateProvince from "./pages/province/provinceUpdate";
import CityUpdate from "./pages/city/cityUpdate";
import AddCity from "./pages/city/cityAdd";
import AddProvince from "./pages/province/addProvince";
import AddCountry from "./pages/country/countryAdd";
function App() {

  const localStorageValue = localStorage.getItem("persist:root");
  const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
  const user = parsedValue.user || "";
  const currentUser = user ? JSON.parse(user).currentUser : {};
  const admin = currentUser && currentUser.accessToken ? currentUser.isAdmin : '';
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
     {admin &&(
      <>
       <Topbar />
      <div className="container">
        <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/countries">
            <CountryList />
          </Route>
          <Route path="/provinces">
            <ProvinceList/>
          </Route>
          <Route path="/cities">
            <CityList/>
          </Route>
          <Route path="/categories">
            <CategoriesList/>
          </Route>
          <Route path="/categories-pages">
            <CategoriesPageList/>
          </Route>
          <Route path="/editCountry/:id">
            <UpdateCountry/>
          </Route>
          <Route path="/updateUser/:id">
            <UpdateUser/>
          </Route>
          <Route path="/editProvince/:id">
            <UpdateProvince/>
          </Route>
          <Route path="/editCity/:id">
            <CityUpdate/>
          </Route>
          <Route path="/addCity">
            <AddCity/>
          </Route>
          <Route path="/addProvince">
            <AddProvince/>
          </Route>
          <Route path="/addCountry">
            <AddCountry/>
          </Route>
      </div>
      </>
     )}
      </Switch>
    </Router>
  );
}

export default App;
