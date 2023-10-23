import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DropDown = styled.div`
  margin: 0;
`;

function DropDownCountry({ Country, City, Developmnet, allCountries,lan, setOptions, formValue }) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async (key) => {
      try {
        const response = await fetch(`http://localhost:1337/api/${key}`);
        const data = await response.json();
        const filterData = data.filter(data => data.lenguage === lan);
        setData(filterData);
        console.log(filterData);
        return (filterData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    let key;

    switch (true) {
      case Country != null || Country != undefined:
        key = `countries/findByName/${Country}`;
        fetchData(key);
        break;
     case allCountries == true:
        key = `countries/`;
        fetchData(key);
        break;
      case City != null || City != undefined:
        key= `provinces/findByCountry/${City}`
        fetchData(key)
        break;
      case Developmnet != null || Developmnet != undefined:
        key= `cities/findByProvince/${Developmnet}`
        fetchData(key)
        break;
      default:
        break;
    }

  }, [Country,City,Developmnet,lan ]);
  console.log(data);
  const handleChange = (e) => {
    setOptions(e.target.value);
    console.log("Set");
};
  return (
    <DropDown>
      <div className="custom-select" >
        <select onChange={handleChange}>
          <option value={formValue? formValue : "0"}>Select option:</option>
          {data.map((item) => (
            <option key={item._id} value={item.countryName? item.urlCountry : item.provinceName? item.urlProvince: item.urlCity }>
              {item.countryName? item.urlCountry : item.provinceName? item.urlProvince : item.urlCity}
            </option>
          ))}
        </select>
      </div>
    </DropDown>
  );
}

export default DropDownCountry;

