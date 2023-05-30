import React, { useState } from 'react';
import './updateForm.css'
const UpdateForm = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  if (data) {
    return (
      <form className='form' onSubmit={handleSubmit}>
        <h1>Index of Industrilux</h1>
        <p>Lenguage</p>
        <input
          type="text"
          name="lenguage"
          value={formData.lenguage}
          onChange={handleChange}
        />
        <p>Country Name</p>
        <input
          type="text"
          name="countryName"
          value={formData.countryName}
          onChange={handleChange}
        />
        <p>Metadescription</p>
        <input
          type="text"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
        />
        <p>keywords</p>
        <input
          type="text"
          name="keyWords"
          value={formData.keyWords}
          placeholder='word1, word2, word3 ...'
          onChange={handleChange}
        />
        <p>Flag Wikipedia Link</p>
        <input
          type="text"
          name="imgRoute"
          value={formData.imgRoute}
          onChange={handleChange}
        />
        <p>URL</p>
        <input
          type="text"
          name="urlCountry"
          value={formData.urlCountry}
          onChange={handleChange}
        />
        <p>h1</p>
        <input
          type="text"
          name="h1"
          value={formData.h1}
          onChange={handleChange}
        />
        <p>h2</p>
        <input
          type="text"
          name="h2"
          value={formData.h2}
          onChange={handleChange}
        />
        <p>Parragraph</p>
        <textarea
          name="p"
          value={formData.p}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update</button>
      </form>
    );
  }else{
    return (
      <form className='form' onSubmit={handleSubmit}>
        <h1>Add Country</h1>
        <input
          placeholder='en/es'
          type="text"
          name="lenguage"
          onChange={handleChange}
        />
        <p>Country Name</p>
        <input
          type="text"
          name="countryName"
          onChange={handleChange}
        />
        <p>Metadescription</p>
        <input
          type="text"
          name="metaDescription"
          onChange={handleChange}
        />
        <p>keywords</p>
        <input
          type="text"
          name="keyWords"
          placeholder='word1, word2, word3 ...'
          onChange={handleChange}
        />
        <p>Wikipedia Flag Link</p>
        <input
          type="text"
          name="imgRoute"
          onChange={handleChange}
        />
        <p>URL</p>
        <input
          type="text"
          name="urlCountry"
          onChange={handleChange}
        />
        <p>h1</p>
        <input
          type="text"
          name="h1"
          onChange={handleChange}
        />
        <p>h2</p>
        <input
          type="text"
          name="h2"
          onChange={handleChange}
        />
        <p>Parragraph</p>
        <textarea
          name="p"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update</button>
      </form>
    );
  }
};

export default UpdateForm;

