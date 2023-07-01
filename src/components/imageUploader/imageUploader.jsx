


// import React, { useState } from 'react';
 
// const UpdateForm = ({ onUpdate }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [altText, setAltText] = useState('');

//   const handleImageChange = (event) => {
//     console.log(event);
//     setSelectedImage(event.target.files[0]);
//   };

//   const handleAltTextChange = (event) => {
//     setAltText(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('images', selectedImage); // Modified field name to 'images'
//     formData.append('altText', altText);

//     onUpdate(formData);
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <h1>Add Images</h1>
//       <input type="file" name="images" onChange={handleImageChange} multiple/>
//       {/* <p>Alt Text</p>
//       <input
//         placeholder="Alternate Text"
//         type="text"
//         name="altText"
//         value={altText}
//         onChange={handleAltTextChange}
//       /> */}
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default UpdateForm;





import React, { useState } from 'react';

const UpdateForm = ({ onUpdate }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [altText, setAltText] = useState('');

  const handleImageChange = (event) => {
    setSelectedImages([...event.target.files]);
  };

  const handleAltTextChange = (event) => {
    setAltText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append('images', selectedImages[i]);
    }
    formData.append('altText', altText);

    onUpdate(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Add Images</h1>
      <input type="file" name="images" onChange={handleImageChange} multiple/>
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
