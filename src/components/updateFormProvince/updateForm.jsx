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
        <h1>Update Province</h1>
        <p>Province Name</p>
        <input
          type="text"
          name="provinceName"
          value={formData.provinceName}
          onChange={handleChange}
        />
        <p>URL</p>
        <input
          type="text"
          name="urlProvince"
          value={formData.urlProvince}
          onChange={handleChange}
        />
        <p>URL COUNTRY</p>
        <input
          type="text"
          name="country"
          value={formData.country}
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
  } else {
    return (
      <form className='form' onSubmit={handleSubmit}>
        <h1>Add Province</h1>
        <p>Lenguage</p>
        <input
          placeholder='en/es'
          type="text"
          name="lenguage"
          onChange={handleChange}
        />
        <p>Province Name</p>
        <input
          type="text"
          name="provinceName"
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
        <p>URL</p>
        <input
        placeholder='nuevo-leon'
          type="text"
          name="urlProvince"
          onChange={handleChange}
        />
        <p>URL COUNTRY</p>
        <input
        placeholder='mexico'
          type="text"
          name="country"
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
        <button type="submit">Add Province</button>
      </form>
    );
  }
};

export default UpdateForm;

