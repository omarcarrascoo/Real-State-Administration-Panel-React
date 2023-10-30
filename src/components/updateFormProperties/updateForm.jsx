import React, { useState } from 'react';
import './updateForm.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DropDownCountry from '../dropdownCountry/DropDownCountry';
import DropDownLan from '../dropDownLan/DropDownLan';
import DropDownCategories from '../dropDownCategories/DropDownCategories';

const UpdateForm = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState(data);
  const [value, setValue] = useState(data?.p || "" );
  const [lenguage, setLanUrl] = useState(data?.lenguage || "");
  const [countryUrl, setCountryUrl] = useState(data?.urlCountry || "");
  const [proviceUrl, setProvinceUrl] = useState(data?.urlProvince ||"")
  const [developmentUrl, setDevelopmentUrl] = useState(data?.urlCity || "")
  const [categoriesUrl, setCategoriesUrl] = useState(data?.urlCategory || "")
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  // const loadOption = (data) =>{
  //   setData(data)
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData, lenguage: lenguage,urlCategory: categoriesUrl, p: value, urlCity: developmentUrl, urlProvince: proviceUrl, urlCountry:countryUrl};
    onUpdate(updatedFormData);
  };
  if (data) {
    return (
      <form className='form formTexts'  onSubmit={handleSubmit}>
      <h1>Update Property</h1>
      {/* <p>Status</p>
      <select name="status" id="status">
        <option value="true">Active</option>
        <option value="false">Unactive</option>
      </select> */}
      <br />
      <br />
      <h3>Property Data</h3>
      <p>Nombre Propiedad (Descripción interna de la propiedad)</p>
      <input
        placeholder='Solo para descripcion interna'
        type="text"
        name="descripcionInterna"
        onChange={handleChange}
        value={formData.descripcionInterna}
      />
      <p>ID Propiedad Interno (Empezar con 501)</p>
      <input
        type="text"
        name="posicionListado"
        onChange={handleChange}
        value={formData.posicionListado}
      />
      <p>URL Completa (https://industrylux.com/idioma/bienes-raices-industriales/pais/ciuadad/ desarrollo/categoria/propiedad)</p>
      <input
        type="text"
        name="fullUrl"
        onChange={handleChange}
        value={formData.fullUrl}
      />
      <p>Link Correspondencia (Link hacia la página de lenguaje alternativo)</p>
      <input
        placeholder='https://industrylux.com/en/mexico/queretaro/airport-area/'
        type="text"
        name="lanLink"
        value={formData.lanLink}
        onChange={handleChange}
      />
      <br />
      {/* <h3>URL</h3> */}
      {/* <p>URL Language (es/en)</p>
      <input
        placeholder='en/es'
        type="text"
        name="lenguage"
        value={formData.lenguage}
        onChange={handleChange}
      />
      <p>URL Country (mexico)</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="urlCountry"
        onChange={handleChange}
        value={formData.urlCountry}
      />
      <DropDownCountry/>
      <p>URL City (queretaro)</p>
      <input
        placeholder='ej. queretaro'
        type="text"
        name="urlProvince"
        onChange={handleChange}
        value={formData.urlProvince}
      />
      <p>URL Development (zona-norte)</p>
      <input
        placeholder='ej. monarca'
        type="text"
        name="urlCity"
        onChange={handleChange}
        value={formData.urlCity}
      />
      <p>URL Category (venta-lotes-y-terrenos-industriales)</p>
      <input
        placeholder='ej. terrenos industriales'
        type="text"
        name="urlCategory"
        onChange={handleChange}
        value={formData.urlCategory}
      />
      <p>URL Property (con-espuela-ferrocarril)</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="urlProperty"
        value={formData.urlProperty}
        onChange={handleChange}
      />   */}
      <h3>URL</h3>
      <p>URL Language (es/en)</p>
      {/* <input
        placeholder='en/es'
        type="text"
        name="lenguage"

        onChange={handleChange}
      /> */}
      <DropDownLan setLan={setLanUrl}/>
      <p>URL Country (mexico)</p>
      {/* <input
        placeholder='ej. mexico'
        type="text"
        name="urlCountry"
        onChange={handleChange}

      /> */}
      <DropDownCountry allCountries={true} lan={lenguage} setOptions= {setCountryUrl}/>
      <p>URL City (queretaro)</p>
      {/* <input
        placeholder='ej. queretaro'
        type="text"
        name="urlProvince"
        onChange={handleChange}
        
      /> */}
      <DropDownCountry City={countryUrl} lan={lenguage} setOptions= {setProvinceUrl}/>
      <p>URL Development (zona-norte)</p>
      {/* <input
        placeholder='ej. monarca'
        type="text"
        name="urlCity"
        onChange={handleChange}
      /> */}
      <DropDownCountry Developmnet={proviceUrl} lan={lenguage}  setOptions= {setDevelopmentUrl} />

      
      <p>URL Category (venta-lotes-y-terrenos-industriales)</p>
      {/* <input
        placeholder='ej. terrenos industriales'
        type="text"
        name="urlCategory"
        onChange={handleChange}
      /> */}
      
      <DropDownCategories lan= {lenguage} setOptions = {setCategoriesUrl}/>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="urlProperty"
        value={formData.urlProperty}
        onChange={handleChange}
      /> 
      <br />
      <h3>SEO</h3>
      <p>Title-tag (Titulo que aparece en la pestaña del explorador de 50 to 60 characters)</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="titleTag"
        value={formData.titleTag}
        onChange={handleChange}
      />
      <p>Metadescription (Texto descriptivo que se ve en buscadores de 150 a 160 characters)</p>
      <textarea
        placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
        type="text"
        name="metadescription"
        onChange={handleChange}
        cols="30" rows="10"
        value={formData.metadescription}
      ></textarea>
      <p>Keywords (Palabras clave mas relevantes)</p>
      <input
        type="text"
        name="keyWords"
        placeholder='word1, word2, word3 ...'
        onChange={handleChange}
        value={formData.keyWords}
      />
      <p>H1 (Titulo de la página 70 - 80 characters máximo)</p>
      <input
        placeholder='Encabezado de la página 70 - 80 characters máximo'
        type="text"
        name="h1"
        onChange={handleChange}
        value={formData.h1}
      />
      <p>H2 (Subtitulo la página 80 - 90 characters máximo)</p>
      <input
        placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
        type="text"
        name="h2"
        onChange={handleChange}
        value={formData.h2}
      />
      
      
      <p>DESARROLLO</p>
      <input
        placeholder='ej. monarca'
        type="text"
        name="colonia"
        onChange={handleChange}
        value={formData.colonia}
      />
      <p>Pais</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="pais"
        onChange={handleChange}
        value={formData.pais}
      />
      <p>Ciudad</p>
      <input
        placeholder='ej. queretaro'
        type="text"
        name="ciudad"
        onChange={handleChange}
        value={formData.ciudad}
      />
      <p>Category</p>
      <input
        placeholder='ej. terrenos industriales'
        type="text"
        name="category"
        onChange={handleChange}
        value={formData.category}
      />
      
      
      <p>Descripción Larga (Detalle de la propiedad)</p>
      <div className="editor">
      <ReactQuill
          className="quill"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
      <p>Video (Url YouTube tomar Id del video: https://www.youtube.com/watch? v=_TIjDbMWG2Q&feature=youtu.be
Reemplazar el Id del video: https://www.youtube.com/embed/_TIjDbMWG2Q?rel=0)</p>
      <input
        
        type="text"
        name="videos"
        onChange={handleChange}
        value={formData.videos}
      />
      <h3>CONTACTO</h3>
      <p>Telefono (+524425950798)</p>
      <input
        type="text"
        name="telefono"
        onChange={handleChange}
        value={formData.telefono}
      />
      <p>WhatsApp (524425950798)</p>
      <input
        type="text"
        name="whatsApp"
        onChange={handleChange}
        value={formData.whatsApp}
      />
      <p>Email (industrylux@industrylux.com)</p>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />



      <h3>DESCRIPCION</h3>
      <p>M2 Terreno</p>
      <input
        type="text"
        name="m2Terreno"
        onChange={handleChange}
        value={formData.m2Terreno}
      />
      <p>M2 Construcción</p>
      <input
        type="text"
        name="m2Construcion"
        onChange={handleChange}
        value={formData.m2Construcion}
      />
      <p>Precio Alfabetico</p>
      <input
        type="text"
        name="precioString"
        onChange={handleChange}
        value={formData.precioString}
      />
      <p>Precio Numerico</p>
      <input
        type="text"
        name="precio"
        onChange={handleChange}
        value={formData.precio}
      />
      
      
      <p>Uso suelo</p>
      <input
        type="text"
        name="usoSuelo"
        onChange={handleChange}
        value={formData.usoSuelo}
      />
      <p>Precio M2</p>
      <input
        type="text"
        name="precioM2"
        onChange={handleChange}
        value={formData.precioM2}
      />
      <p>Altura</p>
      <input
        type="text"
        name="altura"
        onChange={handleChange}
        value={formData.altura}
      />
      <p>Frente</p>
      <input
        type="text"
        name="frente"
        onChange={handleChange}
        value={formData.frente}
      />
      <p>Fondo</p>
      <input
        type="text"
        name="fondo"
        onChange={handleChange}
        value={formData.fondo}
      />
      <p>Rampas</p>
      <input
        type="text"
        name="rampas"
        onChange={handleChange}
        value={formData.rampas}
      />
      <p>Andenes</p>
      <input
        type="text"
        name="andenes"
        onChange={handleChange}
        value={formData.andenes}
      />
      <p>Oficinas</p>
      <input
        type="text"
        name="oficinas"
        onChange={handleChange}
        value={formData.oficinas}
      />
      <p>Estacionamineto</p>
      <input
        type="text"
        name="estacionamineto"
        onChange={handleChange}
        value={formData.estacionamineto}
      />
      <p>Electricidad</p>
      <input
        type="text"
        name="electricidad"
        onChange={handleChange}
        value={formData.electricidad}
      />
      <p>Agua</p>
      <input
        type="text"
        name="agua"
        onChange={handleChange}
        value={formData.agua}
      />
      <p>Andenes</p>
      <input
        type="text"
        name="andenes"
        onChange={handleChange}
        value={formData.andenes}
      />
      <p>Gas Natural</p>
      <input
        type="text"
        name="gasNatural"
        onChange={handleChange}
        value={formData.gasNatural}
      />
      <p>Planta Tratamiento</p>
      <input
        type="text"
        name="plantaTratamiento"
        onChange={handleChange}
        value={formData.plantaTratamiento}
      />
      <p>Areas</p>
      <input
        type="text"
        name="areas"
        onChange={handleChange}
        value={formData.areas}
      />
      <p>Acabados</p>
      <input
        type="text"
        name="acabados"
        onChange={handleChange}
        value={formData.acabados}
      />
      <p>Equipo</p>
      <input
        type="text"
        name="equipo"
        onChange={handleChange}
        value={formData.equipo}
      />
      <p>otros</p>
      <input
        type="text"
        name="otros"
        onChange={handleChange}
        value={formData.otros}
      />
      <p>Costo Mantenimiento</p>
      <input
        type="text"
        name="costoMantenimiento"
        onChange={handleChange}
        value={formData.costoMantenimiento}
      />
      <p>Consto Vigilancia</p>
      <input
        type="text"
        name="constoVigilancia"
        onChange={handleChange}
        value={formData.constoVigilancia}
      />
      <p>Costo Predial</p>
      <input
        type="text"
        name="costoPredial"
        onChange={handleChange}
        value={formData.costoPredial}
      />
      <p>Atractivos Cerca</p>
      <input
        type="text"
        name="atractivosCerca"
        onChange={handleChange}
        value={formData.atractivosCerca}
      />
      <p>Tiendas Cerca</p>
      <input
        type="text"
        name="tiendasCerca"
        onChange={handleChange}
        value={formData.tiendasCerca}
      />
      <p>Direccion</p>
      <input
        type="text"
        name="direccion"
        onChange={handleChange}
        value={formData.direccion}
      />
      <p>Ubicacion Gps</p>
      <input
        type="text"
        name="ubicacionGps"
        onChange={handleChange}
        value={formData.ubicacionGps}
      />
     
      <p>Restricciones</p>
      <input
        type="text"
        name="equirestriccionespo"
        onChange={handleChange}
        value={formData.restricciones}
      />
       <p>Observaciones</p>
      <input
        type="text"
        name="observaciones"
        onChange={handleChange}
        value={formData.observaciones}
      />
      <h3>REDES</h3>
      <p>Compartir Redes</p>
      <input
        type="text"
        name="compartirRedes"
        onChange={handleChange}
        value={formData.compartirRedes}
      />
       <p>Fuente Original</p>
      <input
        type="text"
        name="fuenteOriginal"
        onChange={handleChange}
        value={formData.fuenteOriginal}
      />
      
       <p>Clave Original</p>
      <input
        type="text"
        name="claveOriginal"
        onChange={handleChange}
        value={formData.claveOriginal}
      />
       <p>Inmobiliaria</p>
      <input
        type="text"
        name="inmobiliaria"
        onChange={handleChange}
        value={formData.inmobiliaria}
      />
       <p>Agente Original</p>
      <input
        type="text"
        name="agenteOriginal"
        onChange={handleChange}
        value={formData.agenteOriginal}
      />
      <button type="submit">Update</button>
    </form>
    );
  } else {
    return (
      <form className='form formTexts'  onSubmit={handleSubmit}>
      <h1>Update Property</h1>
      {/* <p>Status</p>
      <select name="status" id="status">
        <option value="true">Active</option>
        <option value="false">Unactive</option>
      </select> */}
      <br />
      <br />
      <h3>Property Data</h3>
      <p>Nombre Propiedad (Descripción interna de la propiedad)</p>
      <input
        placeholder='Solo para descripcion interna'
        type="text"
        name="descripcionInterna"
        onChange={handleChange}

      />
      <p>ID Propiedad Interno (Empezar con 501)</p>
      <input
        type="text"
        name="posicionListado"
        onChange={handleChange}

      />
      <p>URL Completa (https://industrylux.com/idioma/bienes-raices-industriales/pais/ciuadad/ desarrollo/categoria/propiedad)</p>
      <input
        type="text"
        name="fullUrl"
        onChange={handleChange}

      />
      <p>Link Correspondencia (Link hacia la página de lenguaje alternativo)</p>
      <input
        placeholder='https://industrylux.com/en/mexico/queretaro/airport-area/'
        type="text"
        name="lanLink"

        onChange={handleChange}
      />
      <br />
      <h3>URL</h3>
      <p>URL Language (es/en)</p>
      {/* <input
        placeholder='en/es'
        type="text"
        name="lenguage"

        onChange={handleChange}
      /> */}
      <DropDownLan setLan={setLanUrl}/>
      <p>URL Country (mexico)</p>
      {/* <input
        placeholder='ej. mexico'
        type="text"
        name="urlCountry"
        onChange={handleChange}

      /> */}
      <DropDownCountry allCountries={true} lan={lenguage} setOptions= {setCountryUrl}/>
      <p>URL City (queretaro)</p>
      {/* <input
        placeholder='ej. queretaro'
        type="text"
        name="urlProvince"
        onChange={handleChange}
        
      /> */}
      <DropDownCountry City={countryUrl} lan={lenguage} setOptions= {setProvinceUrl}/>
      <p>URL Development (zona-norte)</p>
      {/* <input
        placeholder='ej. monarca'
        type="text"
        name="urlCity"
        onChange={handleChange}
      /> */}
      <DropDownCountry Developmnet={proviceUrl} lan={lenguage}  setOptions= {setDevelopmentUrl} />

      
      <p>URL Category (venta-lotes-y-terrenos-industriales)</p>
      {/* <input
        placeholder='ej. terrenos industriales'
        type="text"
        name="urlCategory"
        onChange={handleChange}
      /> */}
      <DropDownCategories lan= {lenguage} setOptions = {setCategoriesUrl}/>
      <p>URL Property (con-espuela-ferrocarril)</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="urlProperty"
        onChange={handleChange}
      />  
      <br />
      <h3>SEO</h3>
      <p>Title-tag (Titulo que aparece en la pestaña del explorador de 50 to 60 characters)</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="titleTag"
        onChange={handleChange}
      />
      <p>Metadescription (Texto descriptivo que se ve en buscadores de 150 a 160 characters)</p>
      <textarea
        placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
        type="text"
        name="metadescription"
        onChange={handleChange}
        cols="30" rows="10"
      ></textarea>
      <p>Keywords (Palabras clave mas relevantes)</p>
      <input
        type="text"
        name="keyWords"
        placeholder='word1, word2, word3 ...'
        onChange={handleChange}
      />
      <p>H1 (Titulo de la página 70 - 80 characters máximo)</p>
      <input
        placeholder='Encabezado de la página 70 - 80 characters máximo'
        type="text"
        name="h1"
        onChange={handleChange}
      />
      <p>H2 (Subtitulo la página 80 - 90 characters máximo)</p>
      <input
        placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
        type="text"
        name="h2"
        onChange={handleChange}
      />
      
      
      <p>DESARROLLO</p>
      <input
        placeholder='ej. monarca'
        type="text"
        name="colonia"
        onChange={handleChange}
      />
      <p>Pais</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="pais"
        onChange={handleChange}
      />
      <p>Ciudad</p>
      <input
        placeholder='ej. queretaro'
        type="text"
        name="ciudad"
        onChange={handleChange}
      />
      <p>Category</p>
      <input
        placeholder='ej. terrenos industriales'
        type="text"
        name="category"
        onChange={handleChange}
      />
      
      
      <p>Descripción Larga (Detalle de la propiedad)</p>
      <div className="editor">
      <ReactQuill
          className="quill"
          theme="snow"
          onChange={setValue}
        />
      </div>
      <p>Video (Url YouTube tomar Id del video: https://www.youtube.com/watch? v=_TIjDbMWG2Q&feature=youtu.be
Reemplazar el Id del video: https://www.youtube.com/embed/_TIjDbMWG2Q?rel=0)</p>
      <input
        
        type="text"
        name="videos"
        onChange={handleChange}
      />
      <h3>CONTACTO</h3>
      <p>Telefono (+524425950798)</p>
      <input
        type="text"
        name="telefono"
        onChange={handleChange}
      />
      <p>WhatsApp (524425950798)</p>
      <input
        type="text"
        name="whatsApp"
        onChange={handleChange}
      />
      <p>Email (industrylux@industrylux.com)</p>
      <input
        type="text"
        name="email"
        onChange={handleChange}
      />



      <h3>DESCRIPCION</h3>
      <p>M2 Terreno</p>
      <input
        type="text"
        name="m2Terreno"
        onChange={handleChange}

      />
      <p>M2 Construcción</p>
      <input
        type="text"
        name="m2Construcion"
        onChange={handleChange}

      />
      <p>Precio Alfabetico</p>
      <input
        type="text"
        name="precioString"
        onChange={handleChange}

      />
      <p>Precio Numerico</p>
      <input
        type="text"
        name="precio"
        onChange={handleChange}
      />
      
      
      <p>Uso suelo</p>
      <input
        type="text"
        name="usoSuelo"
        onChange={handleChange}
  
      />
      <p>Precio M2</p>
      <input
        type="text"
        name="precioM2"
        onChange={handleChange}
    
      />
      <p>Altura</p>
      <input
        type="text"
        name="altura"
        onChange={handleChange}
      
      />
      <p>Frente</p>
      <input
        type="text"
        name="frente"
        onChange={handleChange}
      
      />
      <p>Fondo</p>
      <input
        type="text"
        name="fondo"
        onChange={handleChange}
      
      />
      <p>Rampas</p>
      <input
        type="text"
        name="rampas"
        onChange={handleChange}
    
      />
      <p>Andenes</p>
      <input
        type="text"
        name="andenes"
        onChange={handleChange}
      
      />
      <p>Oficinas</p>
      <input
        type="text"
        name="oficinas"
        onChange={handleChange}
       
      />
      <p>Estacionamineto</p>
      <input
        type="text"
        name="estacionamineto"
        onChange={handleChange}
        
      />
      <p>Electricidad</p>
      <input
        type="text"
        name="electricidad"
        onChange={handleChange}
        
      />
      <p>Agua</p>
      <input
        type="text"
        name="agua"
        onChange={handleChange}
        
      />
      <p>Andenes</p>
      <input
        type="text"
        name="andenes"
        onChange={handleChange}
        
      />
      <p>Gas Natural</p>
      <input
        type="text"
        name="gasNatural"
        onChange={handleChange}
        
      />
      <p>Planta Tratamiento</p>
      <input
        type="text"
        name="plantaTratamiento"
        onChange={handleChange}
        
      />
      <p>Areas</p>
      <input
        type="text"
        name="areas"
        onChange={handleChange}
        
      />
      <p>Acabados</p>
      <input
        type="text"
        name="acabados"
        onChange={handleChange}
      
      />
      <p>Equipo</p>
      <input
        type="text"
        name="equipo"
        onChange={handleChange}
      
      />
      <p>otros</p>
      <input
        type="text"
        name="otros"
        onChange={handleChange}
      
      />
      <p>Costo Mantenimiento</p>
      <input
        type="text"
        name="costoMantenimiento"
        onChange={handleChange}
      
      />
      <p>Consto Vigilancia</p>
      <input
        type="text"
        name="constoVigilancia"
        onChange={handleChange}
        
      />
      <p>Costo Predial</p>
      <input
        type="text"
        name="costoPredial"
        onChange={handleChange}
       
      />
      <p>Atractivos Cerca</p>
      <input
        type="text"
        name="atractivosCerca"
        onChange={handleChange}
        
      />
      <p>Tiendas Cerca</p>
      <input
        type="text"
        name="tiendasCerca"
        onChange={handleChange}
        
      />
      <p>Direccion</p>
      <input
        type="text"
        name="direccion"
        onChange={handleChange}
        
      />
      <p>Ubicacion Gps</p>
      <input
        type="text"
        name="ubicacionGps"
        onChange={handleChange}
        
      />
     
      <p>Restricciones</p>
      <input
        type="text"
        name="equirestriccionespo"
        onChange={handleChange}
        
      />
       <p>Observaciones</p>
      <input
        type="text"
        name="observaciones"
        onChange={handleChange}
        
      />
      <h3>REDES</h3>
      <p>Compartir Redes</p>
      <input
        type="text"
        name="compartirRedes"
        onChange={handleChange}
        
      />
       <p>Fuente Original</p>
      <input
        type="text"
        name="fuenteOriginal"
        onChange={handleChange}
        
      />
      
       <p>Clave Original</p>
      <input
        type="text"
        name="claveOriginal"
        onChange={handleChange}
      
      />
       <p>Inmobiliaria</p>
      <input
        type="text"
        name="inmobiliaria"
        onChange={handleChange}
      
      />
       <p>Agente Original</p>
      <input
        type="text"
        name="agenteOriginal"
        onChange={handleChange}
        
      />
      <button type="submit">ADD</button>
    </form>
    );
  }
};

export default UpdateForm;

