
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import UpdateForm from '../../components/updateFormProvince/updateForm';
import './provinceUpdate.css';
import axios from 'axios';

const UpdateProvince = () => {
    const history = useHistory();
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://143.110.234.115/api/provinces/find/${id}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const updateData = async (updatedData) => {
    try {
        const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
      const response = await axios.put(`http://143.110.234.115/api/provinces/${id}`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          token: `Bearer ${TOKEN}`,
        },
      });
      
      history.push('/provinces');
    } catch (error) {
      console.log('Error updating data:', error);
    }
  };
  

  return (
    <div className='country__update'>
        
      {data ? (
        <UpdateForm data={data} onUpdate={updateData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default UpdateProvince;
