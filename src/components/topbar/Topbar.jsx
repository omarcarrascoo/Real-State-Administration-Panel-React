import React from "react";
import "./topbar.css";
import {SearchOutlined } from "@material-ui/icons";
import { useSearchContext } from '../../context/searchContext'

export default function Topbar() {


  // const [searchTerm, setSearchTerm] = React.useState('');
  // const [searchResults, setSearchResults] = React.useState([]);

  // const handleSearch = async (event) => {
  //   event.preventDefault();
  
  //   try {
  //     const response = await fetch('https://industrylux.com/api/industrialProperties/search', {
  //       method: 'POST', // or 'GET' or other HTTP methods
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ searchTerm }), // include the searchTerm in the request body
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
      
  //     const data = await response.json();
  //     console.log(data);
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error('There was a problem with the fetch operation:', error);
  //   }
  // };
  
  const { searchResults, setResults } = useSearchContext();
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://industrylux.com/api/industrialProperties/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTerm }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  const localStorageValue = localStorage.getItem("persist:root");
  const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
  const user = parsedValue.user || "";
  const currentUser = user ? JSON.parse(user).currentUser : {};
  const username = currentUser && currentUser.email ? currentUser.email : '';


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="https://industrylux.com/public/images/logoIndustryluxLong.jpg" alt="Industrilux logo" />
        </div>
        <div className="topRight">
        <form className="searchBarPanel" onSubmit={handleSearch}>
          <SearchOutlined />
          <input
            type="text"
            placeholder="Search properties"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <button type="submit">Search</button> */}
        </form>
        </div>
      </div>
    </div>
  );
}
