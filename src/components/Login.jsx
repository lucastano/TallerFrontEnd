import React from 'react'
import '../Estilos/MiEstilos.css'
import { useState} from 'react'
import { inicio } from '../Servicios/Services'
import { useNavigate,NavLink,Navigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'

function Login({inicioSesion}) {
const [username, setUserName] = useState("")
const [password, setPassword] = useState("")
const navigate=useNavigate();

  const handleClick= async (e)=>{
    e.preventDefault();
    
    //aca tenemos quie llamar al services
    const usuario={usuario:username,password:password}
   const respuesta=await inicio(usuario);
   //falta controlar lo que nos devuelve el login api , pero por el momento
   // para avanzar no lo controlamos
   if(respuesta.codigo==200){
    console.log("entra codigo 200")
    let localStorage=window.localStorage;
   localStorage.setItem('apiKey',respuesta.apiKey);
   localStorage.setItem('nombre',username);
   localStorage.setItem('id',respuesta.id);
   
   }
   navigate("/");
   

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
    
  //   <div className="container estilos">
  //   <div className="row justify-content-center mt-5 " >
  //     <div className="col-lx-12 ">
  //       <h2 className="text-center mb-4">Iniciar sesión</h2>
  //       <form>
  //     <div className="mb-3">
  //       <label htmlFor="usuario" className="form-label">Usuario</label>
  //       <input type="text" className="form-control" name="txtUsuario" value={username}  onChange={handleChangeUser}  placeholder="Ingrese su Usuario" required />
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="password" className="form-label">Contraseña</label>
  //       <input type="password" className="form-control" name="txtPassword" value={password} onChange={handleChangePassword}  placeholder="Ingrese su contraseña" required  />
  //     </div>
  //     <div className="text-center">
  //       <button type="submit" className="btn btn-primary" onClick={handleClick} >Iniciar sesión</button>
  //     </div>
  //   </form>
  //     </div>
  //   </div>
  // </div>
  <>
  <Row>
    <Col xs={10}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>LOGIN</Card.Title>
   <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type="text" placeholder="Ingrese usuario" onChange={handleChangeUser} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleChangePassword}  />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleClick}>
    Iniciar
  </Button>
 
</Form>
    
  </Card.Body>
</Card>
    </Col>
  </Row>
 

  
</>
  )
}

export default Login