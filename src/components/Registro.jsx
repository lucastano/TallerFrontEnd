import React, { useState,useEffect } from 'react'
import { Row,Col,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { registro } from '../Servicios/Services'
import { useNavigate,NavLink,Navigate } from 'react-router-dom'



function Registro() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [usuarioLogeado, setUsuarioLogeado] = useState({})
    const navigate=useNavigate();

   useEffect(() => {
     const token=localStorage.getItem('apiKey');
     if(token){
        console.log("existe usuario logeado");
        navigate("/");
     }
   
     
   }, [])
   

    const handleChangeUser=(e)=>{
        setUserName(e.target.value);

    }

    const handleChangePassword=(e)=>{
        setPassword(e.target.value);
    }

    const hancleClickRegistro=(e)=>{
        e.preventDefault();
        const user={usuario:username, password:password}
        registrarse(user);

        


    }

    const registrarse= async(user)=>{
        const resultado = await registro(user);
        console.log(resultado);
        //codigo , apiKey,id
        if(resultado.codigo==200){
          let localStorage=window.localStorage;
             localStorage.setItem('apiKey',resultado.apiKey);
             localStorage.setItem('nombre',username);
             localStorage.setItem('id',resultado.id);
             navigate("/");
        }

    }


  return (
    <>
    <Container>
         <h1 style={{textAlign: 'center'}}>Registro</h1>
    <Row className="row justify-content-center align-items-center">
        <Col sm={12} md={8} lg={4} >
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" onChange={handleChangeUser} placeholder="Ingrese nombre usuario" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={handleChangePassword} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={hancleClickRegistro}>
        Registrarse
      </Button>
    </Form></Col>
    </Row>
    </Container>
   
   
    </>
  )
}

export default Registro