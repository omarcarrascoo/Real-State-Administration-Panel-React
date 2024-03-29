import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
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
import HomesList from "./pages/homeList/homeList";
import AddHome from "./pages/homePages/homeAdd";
import UpdateHome from "./pages/homePages/homeUpdate";
import { useHistory } from 'react-router-dom';
import AddCategory from "./pages/categories/categoriesAdd";
import UpdateCategories from "./pages/categories/categoriesUpdate";
import AddCategoryPage from "./pages/categoryPage/categoriesaPageAdd";
import UpdateCategoriesPages from "./pages/categoryPage/categoriesPageUpdate";
import AddProperty from "./pages/property/addProperty";
import UpdateProperty from "./pages/property/propertyUpdate";
import ImageUploader from "./components/imageUploader/imageUploader";
import AddImage from "./pages/imageUpload/ImageAdd";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  
  const localStorageValue = localStorage.getItem("persist:root");
  const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
  const user = parsedValue.user || "";
  const currentUser = user ? JSON.parse(user).currentUser : {};
  const admin = currentUser && currentUser.accessToken ? currentUser.isAdmin : '';

  const history = useHistory()
  if (!admin) {
    
    return (
      <Router>
        <Login />
      </Router>
    )
  }
// useEffect(()=>{
//   window.location.reload()
// }, [admin])
  return (
    <Router>
      
        <Switch>
        
          <Route exact path="/">
            <Login />
          </Route>
     {admin &&(
      <>
       <Topbar />
      <div className="container">
        <Sidebar />
          <Route  path="/panel/dashboard">
            <Home />
          </Route>
          <Route path="/panel/users">
            <UserList />
          </Route>
          <Route path="/panel/user/:userId">
            <User />
          </Route>
          <Route path="/panel/newUser">
            <NewUser />
          </Route>
          <Route path="/panel/products">
            <ProductList />
          </Route>
          <Route path="/panel/newproduct">
            <NewProduct />
          </Route>
          <Route path="/panel/countries">
            <CountryList />
          </Route>
          <Route path="/panel/provinces">
            <ProvinceList/>
          </Route>
          <Route path="/panel/cities">
            <CityList/>
          </Route>
          <Route path="/panel/categories">
            <CategoriesList/>
          </Route>
          <Route path="/panel/categories-pages">
            <CategoriesPageList/>
          </Route>
          <Route path="/panel/addCategoryPage">
            <AddCategoryPage/>
          </Route>
          <Route path="/panel/editCategoryPage/:id">
            <UpdateCategoriesPages/>
          </Route>
          <Route path="/panel/editCountry/:id">
            <UpdateCountry/>
          </Route>
          <Route path="/panel/updateUser/:id">
            <UpdateUser/>
          </Route>
          <Route path="/panel/editProvince/:id">
            <UpdateProvince/>
          </Route>
          <Route path="/panel/editCity/:id">
            <CityUpdate/>
          </Route>
          <Route path="/panel/addCity">
            <AddCity/>
          </Route>
          <Route path="/panel/addProvince">
            <AddProvince/>
          </Route>
          <Route path="/panel/addCountry">
            <AddCountry/>
          </Route>
          <Route path="/panel/homes">
            <HomesList/>
          </Route>
          <Route path="/panel/addHome">
            <AddHome/>
          </Route>
          <Route path="/panel/editHome/:id">
            <UpdateHome/>
          </Route>
          <Route path='/panel/addCategory'>
            <AddCategory/>
          </Route>
          <Route path='/panel/editCategory/:id'>
            <UpdateCategories/>
          </Route>
          <Route path='/panel/addProperty'>
            <AddProperty/>
          </Route>
          <Route path='/panel/editProperty/:id'>
            <UpdateProperty/>
          </Route>
          <Route path='/panel/imageUploader/:id'>
            <AddImage/>
          </Route>  
      </div>
      </>
     )}
      </Switch>
    </Router>
  );
}

export default App;
