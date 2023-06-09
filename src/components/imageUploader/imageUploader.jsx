// import React, { useState } from 'react';
// import './updateForm.css'
// const UpdateForm = ({ data, onUpdate }) => {
//   const [formData, setFormData] = useState(data);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(formData);
//   };

//   if (data) {
//     return (
//       <form className='form' onSubmit={handleSubmit}>
//       <h1>Add Imgs</h1>
//       <input
//         type="file"
//         name="images"
//         onChange={handleChange}
//       />
//       <p>Country Name</p>
//       <input
//         placeholder='Texto Alternativo'
//         type="text"
//         name="altText"
//         onChange={handleChange}
//       />
//       <button type="submit">Update</button>
//     </form>
//     );
//   }else{
//     return (
//       <form className='form' onSubmit={handleSubmit}>
//       <h1>Add Imgs</h1>
//       <input
//         type="file"
//         name="images"
//         onChange={handleChange}
//       />
//       <p>Country Name</p>
//       <input
//         placeholder='Texto Alternativo'
//         type="text"
//         name="altText"
//         onChange={handleChange}
//       />
//       <button type="submit">Update</button>
//     </form>
//     );
//   }
// };

// export default UpdateForm;





// import React, { useState } from 'react';

// const UpdateForm = ({ onUpdate }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [altText, setAltText] = useState('');

//   const handleImageChange = (event) => {
//     setSelectedImage(event.target.files[0]);
//   };

//   const handleAltTextChange = (event) => {
//     setAltText(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('image', selectedImage);
//     formData.append('altText', altText);

//     onUpdate(formData);
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <h1>Add Images</h1>
//       <input type="file" name="images" onChange={handleImageChange} />
//       <p>Alt Text</p>
//       <input
//         placeholder="Alternate Text"
//         type="text"
//         name="altText"
//         value={altText}
//         onChange={handleAltTextChange}
//       />
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default UpdateForm;








import React, { useState } from 'react';

const UpdateForm = ({ onUpdate }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [altText, setAltText] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleAltTextChange = (event) => {
    setAltText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('images', selectedImage); // Modified field name to 'images'
    formData.append('altText', altText);

    onUpdate(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Add Images</h1>
      <input type="file" name="images" onChange={handleImageChange} />
      <p>Alt Text</p>
      <input
        placeholder="Alternate Text"
        type="text"
        name="altText"
        value={altText}
        onChange={handleAltTextChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
