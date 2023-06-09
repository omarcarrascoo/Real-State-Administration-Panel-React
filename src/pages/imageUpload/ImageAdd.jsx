
// import { useHistory } from 'react-router-dom/cjs/react-router-dom';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom/cjs/react-router-dom';
// import UpdateForm from '../../components/imageUploader/imageUploader';
// import './countryUpdate.css';
// import axios from 'axios';

// const AddImage = () => {
//     const history = useHistory();
//   const [data, setData] = useState(null);
//   const { id } = useParams();

//   const updateData = async (updatedData) => {
//     console.log(updateData);
//     try {
//         const localStorageValue = localStorage.getItem("persist:root");
//         const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
//         const user = parsedValue.user || "";
//         const currentUser = user ? JSON.parse(user).currentUser : {};
//         const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
//         const response = await axios.post(`http://174.138.95.49/api/propertyImage/uploadcompress/${id}`, updatedData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           token: `Bearer ${TOKEN}`,
//         },
//       });
      
//       history.push('/products');
//     } catch (error) {
//       console.log('Error updating data:', error);
//     }
//   };
//   return (
//     <div className='country__update'>
//         <UpdateForm onUpdate={updateData} />
//     </div>
//   );
// };

// export default AddImage;




// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import UpdateForm from '../../components/imageUploader/imageUploader';

// const AddImage = () => {
//   const history = useHistory();
//   const { id } = useParams();

//   const updateData = async (formData) => {
//     try {
//       const localStorageValue = localStorage.getItem("persist:root");
//       const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
//       const user = parsedValue.user || "";
//       const currentUser = user ? JSON.parse(user).currentUser : {};
//       const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
      
//       const response = await axios.post(
//         `http://174.138.95.49/api/propertyImage/uploadcompress/${id}`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             token: `Bearer ${TOKEN}`,
//           },
//         }
//       );

//       history.push('/products');
//     } catch (error) {
//       console.log('Error updating data:', error);
//     }
//   };

//   return (
//     <div className="country__update">
//       <UpdateForm onUpdate={updateData} />
//     </div>
//   );
// };

// export default AddImage;









import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UpdateForm from '../../components/imageUploader/imageUploader';

const AddImage = () => {
  const history = useHistory();
  const { id } = useParams();

  const updateData = async (formData) => {
    try {
      const localStorageValue = localStorage.getItem("persist:root");
      const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
      const user = parsedValue.user || "";
      const currentUser = user ? JSON.parse(user).currentUser : {};
      const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';

      const response = await axios.post(
        `http://174.138.95.49/api/propertyImage/uploadcompress/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            token: `Bearer ${TOKEN}`,
          },
        }
      );

      history.push('/products');
    } catch (error) {
      console.log('Error updating data:', error);
    }
  };

  return (
    <div className="country__update">
      <UpdateForm onUpdate={updateData} />
    </div>
  );
};

export default AddImage;
