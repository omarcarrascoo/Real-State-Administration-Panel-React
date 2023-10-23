import React, { useState } from 'react';
import './updateForm.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const UpdateForm = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState(data);
  const [value, setValue] = useState(data?.p || "" );
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData, p: value };
    onUpdate(updatedFormData);
  };
  if (data) {
    return (
      <form className='form formTexts' onSubmit={handleSubmit}>
      <h1>Add Country</h1>
      <p>Status</p>
      <select name="status" id="status">
        <option value="true">Active</option>
        <option value="false">Unactive</option>
      </select>
      <p>Lenguage</p>
      <input
        placeholder='en/es'
        type="text"
        name="lenguage"
        value={formData.lenguage}
        onChange={handleChange}
      />
      <p>Lenguage Alternative Page (Link hacie la página de lenguaje Alternativo)</p>
      <input
        placeholder='http://localhost:1337/en/mexico/queretaro/airport-area/'
        type="text"
        name="lanLink"
        value={formData.lanLink}
        onChange={handleChange}
      />
      <p>Internal Name - Uniq Identifier</p>
      <input
        placeholder='Nombre del pais: ej.México'
        type="text"
        name="countryName"
        onChange={handleChange}
        value={formData.countryName}
      />
      <p>Menu Name - Nombre como aparecera en el menu</p>
      <input
        placeholder='Nombre del menu: ej.México'
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <p>Metadescription (Descriocion para el robot buscador de google, es el texto que aparce en la descripcion del link)</p>
      <textarea
        placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
        type="text"
        name="metadescription"
        onChange={handleChange}
        cols="30" rows="10"
        value={formData.metadescription}
      ></textarea>
      <p>keywords</p>
      <input
        type="text"
        name="keyWords"
        placeholder='word1, word2, word3 ...'
        onChange={handleChange}
        value={formData.keyWords}
      />
      <p>Title-tag (Titulo de la pestaña)</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="titleTag"
        onChange={handleChange}
        value= {formData.titleTag}
      />
      <p>Image Cover (Link hacia la imagen que se requiera como portada, se puede obtener haciendo click derecho sobte cualquier imagen de la página.)</p> 
      <input
        placeholder = "Image Link ej. httpss://w7.pngwing.com/pngs/56/96/png-transparent-flag-of-mexico-flag-of-mexico-united-states-mexican-war-of-independence-mexican-flag-s-free-flag-text-logo.png"
        type="text"
        name="imgCover"
        onChange={handleChange}
        value={formData.imgCover}
      />
      <p>Wikipedia Flag Link</p>
      <input
        placeholder = "Wikipedia Link ej. httpss://w7.pngwing.com/pngs/56/96/png-transparent-flag-of-mexico-flag-of-mexico-united-states-mexican-war-of-independence-mexican-flag-s-free-flag-text-logo.png"
        type="text"
        name="imgRoute"
        onChange={handleChange}
        value={formData.imgRoute}
      />
      <p>URL COUNTRY</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="urlCountry"
        onChange={handleChange}
        value={formData.urlCountry}
      />
      <p>H1 (Es el titulo de la pagina)</p>
      <input
        placeholder='Encabezado de la página 70 - 80 characters máximo'
        type="text"
        name="h1"
        onChange={handleChange}
        value={formData.h1}
      />
      <p>H2 (Es el subtitulo de la página)</p>
      <input
        placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
        type="text"
        name="h2"
        onChange={handleChange}
        value={formData.h2}
      />
      <p>Descripcion Larga</p>
      <div className="editor">
         <ReactQuill
          className="quill"
          theme="snow"
          value={value}
          onChange={setValue}
        />
         </div>
      <button type="submit">Update</button>
    </form>
    );
  }else{
   
    return (
      <form className='form formTexts' onSubmit={handleSubmit}>
        <h1>Add Country</h1>
        <p>Status</p>
        <select name="status" id="status">
          <option value="true">Active</option>
          <option value="false">Unactive</option>
        </select>
        <p>Lenguage</p>
        <input
          placeholder='en/es'
          type="text"
          name="lenguage"
          onChange={handleChange}
        /><p>Lenguage Alternative Page</p>
        <input
          placeholder='http://localhost:1337/en/mexico/queretaro/airport-area/'
          type="text"
          name="lanLink"
          onChange={handleChange}
        />
        <p>Internal Name (Uniq Identifier)</p>
        <input
          placeholder='Nombre del pais: ej.México'
          type="text"
          name="countryName"
          onChange={handleChange}
        />
        <p>Menu Name - Nombre como aparecera en el menu</p>
        <input
        placeholder='Nombre del pais en menu: ej.México'
        type="text"
        name="name"
        onChange={handleChange}
        />
        <p>Metadescription (Descriocion para el robot buscador de google, es el texto que aparce en la descripcion del link)</p>
        <textarea
          placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
          type="text"
          name="metadescription"
          onChange={handleChange}
          cols="30" rows="10"
        ></textarea>
        <p>keywords</p>
        <input
          type="text"
          name="keyWords"
          placeholder='word1, word2, word3 ...'
          onChange={handleChange}
        />
        <p>Title-tag (Titulo de la pestaña)</p>
        <input
          placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
          type="text"
          name="titleTag"
          onChange={handleChange}
        />
        <p>Image Cover  (Link hacia la imagen que se requiera como portada, se puede obtener haciendo click derecho sobte cualquier imagen de la página.)</p> 
        <input
        placeholder = "Image Link ej. httpss://w7.pngwing.com/pngs/56/96/png-transparent-flag-of-mexico-flag-of-mexico-united-states-mexican-war-of-independence-mexican-flag-s-free-flag-text-logo.png"
        type="text"
        name="imgCover"
        onChange={handleChange}
        />
        <p>Wikipedia Flag Link</p>
        <input
          placeholder = "Wikipedia Link ej. httpss://w7.pngwing.com/pngs/56/96/png-transparent-flag-of-mexico-flag-of-mexico-united-states-mexican-war-of-independence-mexican-flag-s-free-flag-text-logo.png"
          type="text"
          name="imgRoute"
          onChange={handleChange}
        />
        <p>URL COUNTRY</p>
        <input
          placeholder='ej. mexico'
          type="text"
          name="urlCountry"
          onChange={handleChange}
        />
        <p>H1 (Es el titulo de la pagina)</p>
        <input
          placeholder='Encabezado de la página 70 - 80 characters máximo'
          type="text"
          name="h1"
          onChange={handleChange}
        />
        <p>H2 (Es el subtitulo de la página)</p>
        <input
          placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
          type="text"
          name="h2"
          onChange={handleChange}
        />
        {/* <p>Descripcion Larga</p>
        <textarea
          placeholder='Descripcion del pais'
          name="p"
          onChange={handleChange}
        ></textarea> */}
         <div className="editor">
         <ReactQuill
          className="quill"
          theme="snow"
          value={value}
          onChange={setValue}
        />
         </div>


        <button type="submit">Add</button>
      </form>
    );
  }
};

export default UpdateForm;

