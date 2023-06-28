import axios from "axios";

const BASE_URL = "http://localhost:1337/api/";

// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
const localStorageValue = localStorage.getItem("persist:root");
console.log(localStorageValue);
const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
console.log(parsedValue);
const user = parsedValue.user || "";
console.log(user);
const currentUser = user ? JSON.parse(user).currentUser : {};
const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
// Rest of your code


// Rest of your code



// const TOKEN = localStorageValue ;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
