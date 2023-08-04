import React from "react";
import "../Estilos/MiEstilos.css";
import { useState, useEffect } from "react";
import { inicio } from "../Servicios/Services";
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { toast } from 'react-toastify';
import { modificarSpinner } from "../redux/features/spinner";
import { useSelector ,useDispatch} from "react-redux";


function Login({ inicioSesion }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spinner=useSelector(state=>state.spinner)

  useEffect(() => {
    const token = localStorage.getItem("apiKey");
    if (token) {
      console.log("existe usuario logeado");
      navigate("/");
    }
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
     dispatch(modificarSpinner(true))
    
    const usuario = { usuario: username, password: password };
    
    try{
      const respuesta = await inicio(usuario);
      let localStorage = window.localStorage;
      localStorage.setItem("apiKey", respuesta.apiKey);
     
      localStorage.setItem("nombre", username);
      localStorage.setItem("id", respuesta.id);
      toast.success("Bienvenido " + usuario.usuario);
      dispatch(modificarSpinner(false));
      navigate("/");

    }catch(error){
      dispatch(modificarSpinner(false));
     
      //ver como dejar mejor este mensaje de error 
      toast.error(error.message);
      

    }
   
       
    
    
  };
  const handleChangeUser = (e) => {
    const nombreusuario = e.target.value;
    setUserName(nombreusuario);
  };
  const handleChangePassword = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  };
  const handleClickRegistro = (e) => {
    e.preventDefault();
    navigate("/registro");
  };
  const isFormValid = username.trim() !== '' && password.trim() !== '';
  console.log('isFormValid', isFormValid)
  return (
    <Container className="container-login">
      <Row>
        <Col xs={12}>
          <Form className="custom-form">
            <h2>Inicio de sesión</h2>
            <Form.Group className="mb-3"  controlId="formBasicEmail">
              <Form.Label className="label-blanco">Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese usuario" onChange={handleChangeUser}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label-blanco">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChangePassword}/>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button  disabled={!isFormValid} variant="primary" type="submit" onClick={handleClick} className="m-2">
                Iniciar
              </Button>
              <Button variant="secondary" type="submit" onClick={handleClickRegistro} className="m-2">
                Registrarme
              </Button>
            </div> 
            <div className="d-flex justify-content-center mt-3">
               {spinner &&  <Spinner animation="border" variant="primary"/>}
              </div>
            
          </Form>
         
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
