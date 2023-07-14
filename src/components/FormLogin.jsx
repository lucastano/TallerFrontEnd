import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const FormLogin=()=> {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Inicia sesión con tu correo</label>
        <input type="email" className="form-control" id="email" placeholder="Correo electrónico" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" required />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary" >Iniciar sesión</button>
      </div>
    </form>
  )
}

export default FormLogin