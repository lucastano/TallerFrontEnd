import React from 'react'
import '../Estilos/MiEstilos.css'
import { useState,useEffect} from 'react'
import { inicio } from '../Servicios/Services'
import { useNavigate,NavLink,Navigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap'

function Login({inicioSesion}) {
const [username, setUserName] = useState("")
const [password, setPassword] = useState("")
const navigate=useNavigate();

useEffect(() => {
  const token=localStorage.getItem('apiKey');
  if(token){
     console.log("existe usuario logeado");
     navigate("/");
  }

  
}, [])

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
  const handleClickRegistro=(e)=>{
    e.preventDefault();
    navigate("/registro");

  }

  return (
    
  
  <Container>
     <Row className="row justify-content-center align-items-center">
    <Col xs={10}>
   
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
  <Button variant="secondary" type="submit" onClick={handleClickRegistro}>
    Registrarme
  </Button>
 
</Form>
    
  
    </Col>
  </Row>
  </Container>
 
 

  

  )
}

export default Login