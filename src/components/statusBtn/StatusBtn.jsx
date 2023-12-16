import React, { useState, useEffect } from 'react';
import './statusBtn.css';

function StatusBtn({ propertyId, initialStatus }) {
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    // Assuming you have an API endpoint for updating the status
    const updateStatus = async () => {
      try {
        const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
        const response = await fetch(`https://industrylux.com/api/industrialProperties/${propertyId}`, {
          method: 'PUT', // Use the appropriate HTTP method for updating
          headers: {
            'Content-Type': 'application/json',
            token: `Bearer ${TOKEN}`,
          },
          body: JSON.stringify({ status }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Optionally, you can handle the response or update the UI
        const updatedData = await response.json();
        console.log('Updated property:', updatedData);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    updateStatus();
  }, [propertyId, status]);

  const handleStatusChange = () => {
    // Toggle the status locally
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={status} onChange={handleStatusChange} />
      <span className="slider round"></span>
    </label>
  );
}

export default StatusBtn;

