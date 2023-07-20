import React from 'react'
import '../Estilos/MiEstilos.css'
import { useState} from 'react'

function Login({inicioSesion}) {
const [username, setUserName] = useState("")
const [password, setPassword] = useState("")


  const handleClick=(e)=>{
    e.preventDefault();
    inicioSesion(username,password);

  }
  const handleChangeUser=(e)=>{
    const nombreusuario=e.target.value;
    setUserName(nombreusuario);
    
  }
  const handleChangePassword=(e)=>{
    const userPassword = e.target.value;
    setPassword(userPassword);
    

  }

  return (
    
    <div className="container estilos">
    <div className="row justify-content-center mt-5 " >
      <div className="col-lx-12 ">
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        <form>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">Usuario</label>
        <input type="text" className="form-control" name="txtUsuario" value={username}  onChange={handleChangeUser}  placeholder="Ingrese su Usuario" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input type="password" className="form-control" name="txtPassword" value={password} onChange={handleChangePassword}  placeholder="Ingrese su contraseña" required  />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary" onClick={handleClick} >Iniciar sesión</button>
      </div>
    </form>
      </div>
    </div>
  </div>
  )
}

export default Login