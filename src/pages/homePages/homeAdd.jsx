
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import UpdateForm from '../../components/updateFormHome/updateForm';
import './countryUpdate.css';
import axios from 'axios';

const AddHome = () => {
    const history = useHistory();
  const [data, setData] = useState(null);
  const { id } = useParams();

  const updateData = async (updatedData) => {
    try {
        const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
        const response = await axios.post(`http://localhost:8000/api/homes/add`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          token: `Bearer ${TOKEN}`,
        },
      });
      history.push('/homes');

    } catch (error) {
      console.log('Error updating data:', error);
    }
  };
  return (
    <div className='country__update'>
        <UpdateForm onUpdate={updateData} />
    </div>
  );
};

export default AddHome;