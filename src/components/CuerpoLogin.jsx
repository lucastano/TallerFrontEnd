import React from 'react'
import FormLogin from './FormLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estilos/MiEstilos.css'


const CuerpoLogin=()=> {
 
  
  return (
   
    <div className="container estilos">
      <div className="row justify-content-center mt-5 " >
        <div className="col-lx-12 ">
          <h2 className="text-center mb-4">Iniciar sesión</h2>
          <FormLogin />
        </div>
      </div>
    </div>
      );
    
  
}

export default CuerpoLogin