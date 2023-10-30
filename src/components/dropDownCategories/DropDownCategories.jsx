import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DropDown = styled.div`
  margin: 0;
`;

function DropDownCategories({setOptions, lan}) {
    const handleChange = (e) => {
        setOptions(e.target.value);
    };
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async (key) => {
            try {
              const response = await fetch(`https://industrylux.com/api/categories`);
              const data = await response.json();
              setData(data);
              console.log(data);
              return (data);
            } catch (error) {
              console.log('Error fetching data:', error);
            }
          };
        fetchData()
    }, [])
    return(

        <DropDown>
        <div className="custom-select">
            <select onChange={handleChange}>
                <option value="0">Select option:</option>
                {data.map((item) => (
                    <option key={item._id} value={item.urlCategory}>
                    {item.urlCategory}
                    </option>
                ))}
            </select>
        </div>
        </DropDown>
    )
}

export default DropDownCategories;