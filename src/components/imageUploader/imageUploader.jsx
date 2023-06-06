// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom/cjs/react-router-dom';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom';
// const ImageUploader = () => {
//     const history = useHistory();
//   const [selectedImages, setSelectedImages] = useState([]);
//   const { id } = useParams();

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     setSelectedImages([file]);
  
//     try {
//       const localStorageValue = localStorage.getItem("persist:root");
//       const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
//       const user = parsedValue.user || "";
//       const currentUser = user ? JSON.parse(user).currentUser : {};
//       const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
  
//       const formData = new FormData();
//       formData.append('image', file);
  
//       const response = await axios.put(`http://localhost:8000/api/propertyImage/uploadcompress/${id}`, formData, {
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
//     <form onSubmit={handleImageUpload}>
//       <input
//         type="file"
//         accept="image/*"
//         // multiple
//         onChange={handleImageUpload}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default ImageUploader;









// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

// const ImageUploader = () => {
//   const history = useHistory();
//   const [selectedImages, setSelectedImages] = useState([]);
//   const { id } = useParams();

//   const handleImageUpload = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target); // Use the FormData directly from the event target
//     setSelectedImages(Array.from(formData.values()));

//     try {
//       const localStorageValue = localStorage.getItem("persist:root");
//       const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
//       const user = parsedValue.user || "";
//       const currentUser = user ? JSON.parse(user).currentUser : {};
//       const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';

//       const response = await axios.post(`http://localhost:8000/api/propertyImage/uploadcompress/${id}`, formData, {
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
//     <form onSubmit={handleImageUpload}>
//       <input
//         type="file"
//         accept="image/*"
//         name="image" // Give the input a name to include it in FormData
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default ImageUploader;










import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ImageUploader = () => {
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('images', event.target.files[0]); // Use the field name 'images'

    try {
      const localStorageValue = localStorage.getItem("persist:root");
      const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
      const user = parsedValue.user || "";
      const currentUser = user ? JSON.parse(user).currentUser : {};
      const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';

      const response = await axios.post(`http://localhost:8000/api/propertyImage/uploadcompress/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: `Bearer ${TOKEN}`,
        },
      });

      history.push('/products');
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleImageUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ImageUploader;
