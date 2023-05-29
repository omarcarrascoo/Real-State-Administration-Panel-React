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
        <h1>Update City</h1>
        <p>City Name</p>
        <input
          type="text"
          name="cityName"
          value={formData.cityName}
          onChange={handleChange}
        />
        <p>URL</p>
        <input
          type="text"
          name="urlCity"
          value={formData.urlCity}
          onChange={handleChange}
        />
        <p>URL Province</p>
        <input
        type="text"
        name="urlProvince"
        value={formData.urlProvince}
        onChange={handleChange}
      />
      <p>URL Country</p>
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
        <p>Parragraphs</p>
        <textarea
          name="p"
          value={formData.p}
          onChange={handleChange}
        ></textarea>
        <p>Meta description</p>
        <input
          type="text"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
        />
        <p>Keywords</p>
        <input
          type="text"
          name="keyWords"
          value={formData.keyWords}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    );
  } else {
    return (
      <form className='form' onSubmit={handleSubmit}>
        <h1>Add City</h1>
        <p>City Name</p>
        <input
          type="text"
          name="cityName"
          onChange={handleChange}
        />
        <p>URL</p>
        <input
          type="text"
          name="urlCity"
          onChange={handleChange}
        />
        <p>URL Province</p>
        <input
        type="text"
        name="urlProvince"
        onChange={handleChange}
      />
      <p>URL Country</p>
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
        <p>Parragraphs</p>
        <textarea
          name="p"
          onChange={handleChange}
        ></textarea>
        <p>Meta description</p>
        <input
          type="text"
          name="metaDescription"
          onChange={handleChange}
        />
        <p>Keywords</p>
        <input
          type="text"
          name="keyWords"
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    );
  }
};

export default UpdateForm;

