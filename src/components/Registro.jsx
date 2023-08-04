import React, { useState,useEffect } from 'react'
import { Row,Col,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { registro } from '../Servicios/Services'
import { useNavigate,NavLink,Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function Registro() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [usuarioLogeado, setUsuarioLogeado] = useState({})
    const navigate=useNavigate();

   useEffect(() => {
     const token=localStorage.getItem('apiKey');
     if(token){
        toast.error("Existe usuario logeado.");
        navigate("/");
     }
   
     
   }, [])
   

    const handleChangeUser=(e)=>{
        setUserName(e.target.value);

    }

    const handleChangePassword=(e)=>{
        setPassword(e.target.value);
    }

    const hancleClickRegistro= async(e)=>{
        e.preventDefault();
        const user={usuario:username, password:password}
        try{
          console.log('entro al try')

           const resultado = await registro(user);
           
          
           localStorage.setItem('apiKey',resultado.apiKey);
           localStorage.setItem('nombre',username);
           localStorage.setItem('id',resultado.id);
           toast.success("Bienvenido "+user.usuario);
           navigate("/");
           

        }
        catch(error){
          console.log('resultado', error)
          toast.error(error.message);
          

        }

        


    }

    

    const isFormValid = username.trim() !== '' && password.trim() !== '';
    console.log('isFormValid', isFormValid)
  return (
    <>
    <Container className="container-registro">
        
    <Row >
        <Col sm={12}  >
        <Form className="custom-form"> 
        <h2 style={{textAlign: 'center'}} className="label-blanco">Registro</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label-blanco">Usuario</Form.Label>
        <Form.Control type="text" onChange={handleChangeUser} placeholder="Ingrese nombre usuario" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label-blanco">Password</Form.Label>
        <Form.Control type="password" onChange={handleChangePassword} placeholder="Password" />
      </Form.Group>
      
      <Button disabled={!isFormValid} variant="primary" type="submit" onClick={hancleClickRegistro}>
        Registrarse
      </Button>
      <Button variant="danger" type="submit" onClick={()=> navigate("/login")}>
        Cancelar
      </Button>
    </Form>
    
    </Col>
    
    </Row>
    </Container>
    </>
  )
}

export default Registro