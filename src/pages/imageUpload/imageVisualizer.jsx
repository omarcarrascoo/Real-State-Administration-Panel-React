// import React from 'react';

// function ImageVisualizer({ images }) {
//   console.log(images);
//   // Dentro de tu componente
//     const { images } = this.state; // Suponiendo que los datos se almacenan en el estado "data"
  
//     if (data === null) {
//       return <div>Cargando...</div>; // Otra opción es mostrar un spinner de carga
//     }
  
//     // Renderizar los datos cuando estén disponible
  
//   return (
//     <div>
//       <h1>Images</h1>
//       {images.map((image, index) => (
//         <img key={index} src={image.imgRoute} alt={`Image ${index}`} />
//       ))}
//     </div>
//   );
// }

// export default ImageVisualizer;
import React from 'react';
import './ImageUpdate.css'
function ImageVisualizer({ images }) {
  console.log(images);

  if (images === null) {
    return <div>Cargando...</div>; // Otra opción es mostrar un spinner de carga
  }else{
    console.log(images.imgRoute);
    return (
    
        <div className='imgVisual'>
          <h1>Images</h1>
          {images.imgRoute.toReversed().map((image, index) => (
            <div className="imgBox">
                <div className="imgImgBox">
                    <img className='imageProperties' key={index} src={`http://localhost:1337/${image}`} alt={`Image ${index}`} />
                </div>
                <div className="altImgBox">
                    <form action="">
                      <input type="text" placeholder='Alt Text' />
                      <div className="btnArea">
                        <button className='btnPrimary'>Update</button>
                        <button className='btnSecondary'>Deleate</button>
                      </div>
                    </form>
                </div>
            </div>
          ))}
        </div>
      );
  }

  
}

export default ImageVisualizer;


