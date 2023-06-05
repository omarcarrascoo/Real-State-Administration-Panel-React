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
      <h1>Add Property</h1>
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
      <p>Property Name</p>
      <input
        placeholder='Solo para descripcion interna'
        type="text"
        name="descripcionInterna"
        onChange={handleChange}
        value={formData.descripcionInterna}
      />
      <p>Metadescription</p>
      <textarea
        placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
        type="text"
        name="metaDescription"
        onChange={handleChange}
        cols="30" rows="10"
        value={formData.metaDescription}
      ></textarea>
      <p>keywords</p>
      <input
        type="text"
        name="keyWords"
        placeholder='word1, word2, word3 ...'
        onChange={handleChange}
        value={formData.keyWords}
      />
      <p>URL PROPIEDAD</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="urlProperty"
        value={formData.urlProperty}
        onChange={handleChange}
      />
      <p>Title-tag</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="titleTag"
        value={formData.titleTag}
        onChange={handleChange}
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
      <p>URL DESARROLLO</p>
      <input
        placeholder='ej. monarca'
        type="text"
        name="urlCity"
        onChange={handleChange}
        value={formData.urlCity}
      />
      <p>URL ORIGIN COUNTRY</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="urlCountry"
        onChange={handleChange}
        value={formData.urlCountry}
      />
      <p>URL ORIGIN CITY</p>
      <input
        placeholder='ej. queretaro'
        type="text"
        name="urlProvince"
        onChange={handleChange}
        value={formData.urlProvince}
      />
      <p>h1</p>
      <input
        placeholder='Encabezado de la página 70 - 80 characters máximo'
        type="text"
        name="h1"
        onChange={handleChange}
        value={formData.h1}
      />
      <p>h2</p>
      <input
        placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
        type="text"
        name="h2"
        onChange={handleChange}
        value={formData.h2}
      />
      <p>Descripcion Larga</p>
      <textarea
        placeholder='Descripcion del desarrollo'
        name="p"
        onChange={handleChange}
        value={formData.p}
      ></textarea>
      <p>Video</p>
      <input
        
        type="text"
        name="videos"
        onChange={handleChange}
        value={formData.videos}
      />
      <p>Posicion Listado</p>
      <input
        
        type="text"
        name="posicionListado"
        onChange={handleChange}
        value={formData.posicionListado}
      />
      <p>Año de construcción</p>
      <input
        
        type="text"
        name="anoConstruccion"
        onChange={handleChange}
        value={formData.anoConstruccion}
      />
      <p>Uso suelo</p>
      <input
        type="text"
        name="usoSuelo"
        onChange={handleChange}
        value={formData.usoSuelo}
      />
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
      <p>Precio String</p>
      <input
        type="text"
        name="precioString"
        onChange={handleChange}
        value={formData.precioString}
      />
      <p>Precio</p>
      <input
        type="text"
        name="precio"
        onChange={handleChange}
        value={formData.precio}
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
      <p>Telefono</p>
      <input
        type="text"
        name="telefono"
        onChange={handleChange}
        value={formData.telefono}
      />
      <p>whatsApp</p>
      <input
        type="text"
        name="whatsApp"
        onChange={handleChange}
        value={formData.whatsApp}
      />
      <p>email</p>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <p>Restricciones</p>
      <input
        type="text"
        name="equirestriccionespo"
        onChange={handleChange}
        value={formData.restricciones}
      />
      <p>Compartir Redes</p>
      <input
        type="text"
        name="compartirRedes"
        onChange={handleChange}
        value={formData.compartirRedes}
      />
      <p>imgRoute</p>
      <input
        type="text"
        name="imgRoute"
        onChange={handleChange}
        value={formData.imgRoute}
      />
       <p>Fuente Original</p>
      <input
        type="text"
        name="fuenteOriginal"
        onChange={handleChange}
        value={formData.fuenteOriginal}
      />
       <p>Observaciones</p>
      <input
        type="text"
        name="observaciones"
        onChange={handleChange}
        value={formData.observaciones}
      />
       <p>Clave Original</p>
      <input
        type="text"
        name="claveOriginal"
        onChange={handleChange}
        value={formData.claveOriginal}
      />
       <p>inmobiliaria</p>
      <input
        type="text"
        name="inmobiliaria"
        onChange={handleChange}
        value={formData.inmobiliaria}
      />
       <p>agenteOriginal</p>
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
      <form className='form' onSubmit={handleSubmit}>
      <h1>Add Property</h1>
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
      />
      <p>Property Name</p>
      <input
        placeholder='Solo para descripcion interna'
        type="text"
        name="descripcionInterna"
        onChange={handleChange}
      />
      <p>Metadescription</p>
      <textarea
        placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
        type="text"
        name="metaDescription"
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
      <p>URL PROPIEDAD</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="urlProperty"
        onChange={handleChange}
      />
      <p>Title-tag</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="titleTag"
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
      <p>URL DESARROLLO</p>
      <input
        placeholder='ej. monarca'
        type="text"
        name="urlCity"
        onChange={handleChange}
      />
      <p>URL ORIGIN COUNTRY</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="urlCountry"
        onChange={handleChange}
      />
      <p>URL ORIGIN CITY</p>
      <input
        placeholder='ej. queretaro'
        type="text"
        name="urlProvince"
        onChange={handleChange}
      />
      <p>h1</p>
      <input
        placeholder='Encabezado de la página 70 - 80 characters máximo'
        type="text"
        name="h1"
        onChange={handleChange}
      />
      <p>h2</p>
      <input
        placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
        type="text"
        name="h2"
        onChange={handleChange}
      />
      <p>Descripcion Larga</p>
      <textarea
        placeholder='Descripcion del desarrollo'
        name="p"
        onChange={handleChange}
      ></textarea>
      <p>Video</p>
      <input
        
        type="text"
        name="videos"
        onChange={handleChange}
      />
      <p>Posicion Listado</p>
      <input
        
        type="text"
        name="posicionListado"
        onChange={handleChange}
      />
      <p>Año de construcción</p>
      <input
        
        type="text"
        name="anoConstruccion"
        onChange={handleChange}
      />
      <p>Uso suelo</p>
      <input
        type="text"
        name="usoSuelo"
        onChange={handleChange}
      />
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
      <p>Precio String</p>
      <input
        type="text"
        name="precioString"
        onChange={handleChange}
      />
      <p>Precio</p>
      <input
        type="text"
        name="precio"
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
      <p>Telefono</p>
      <input
        type="text"
        name="telefono"
        onChange={handleChange}
      />
      <p>whatsApp</p>
      <input
        type="text"
        name="whatsApp"
        onChange={handleChange}
      />
      <p>email</p>
      <input
        type="text"
        name="email"
        onChange={handleChange}
      />
      <p>Restricciones</p>
      <input
        type="text"
        name="equirestriccionespo"
        onChange={handleChange}
      />
      <p>Compartir Redes</p>
      <input
        type="text"
        name="compartirRedes"
        onChange={handleChange}
      />
      <p>imgRoute</p>
      <input
        type="text"
        name="imgRoute"
        onChange={handleChange}
      />
       <p>Fuente Original</p>
      <input
        type="text"
        name="fuenteOriginal"
        onChange={handleChange}
      />
       <p>Observaciones</p>
      <input
        type="text"
        name="observaciones"
        onChange={handleChange}
      />
       <p>Clave Original</p>
      <input
        type="text"
        name="claveOriginal"
        onChange={handleChange}
      />
       <p>inmobiliaria</p>
      <input
        type="text"
        name="inmobiliaria"
        onChange={handleChange}
      />
       <p>agenteOriginal</p>
      <input
        type="text"
        name="agenteOriginal"
        onChange={handleChange}
      />
      <input type="file" name="imgRoute" id="imgRoute" onChange={handleChange}/>
      <button type="submit">Update</button>
    </form>
    );
  }
};

export default UpdateForm;

