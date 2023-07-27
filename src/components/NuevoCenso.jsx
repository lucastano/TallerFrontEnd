import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

function NuevoCenso() {
    const [nombre, setNombre] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [nacimiento, setNacimiento] = useState('')
    const [ocupacion, setOcupacion] = useState('')
    
    
    

    const handleChangeNombre=(e)=>{
       setNombre(e.target.value);

    }
    const handleChangeDepartamento=(e)=>{
        setDepartamento(e.target.value);

    }
    const handleChangeCiudad=(e)=>{
        setCiudad(e.target.value);

    }
    const handleChangeFNacimiento=(e)=>{
       setNacimiento(e.target.value)

    }
    const handleChangeOcupacion=(e)=>{
        setOcupacion(e.target.value)

    }

    const handleClick=(e)=>{
        e.preventDefault();
        const censado={
            idUsuario:localStorage.getItem('id'),
            nombre:nombre,
            departamento:departamento,
            ciudad:ciudad,
            fechaNacimiento:nacimiento,
            ocupacion:ocupacion

        };

        console.log("persona por censar",censado);

    }

    
  return (

    <Container >
        <Row>
            <Col xs={12}>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="text-left">Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Nombre" onChange={handleChangeNombre} />
      </Form.Group>
      <Form.Group>
      <Form.Label  className="text-left">Departamento</Form.Label>
    <Form.Select aria-label="Default select example" onChange={handleChangeDepartamento}> 
      <option>seleccione departamento...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Form.Group>

    <Form.Group>
    <Form.Label  className="text-left">Ciudad</Form.Label>
    <Form.Select aria-label="Default select example" onChange={handleChangeCiudad}> 
      <option>seleccione ciudad...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="text-left">Fecha de nacimiento</Form.Label>
        <Form.Control type="Date" placeholder="Ingrese fecha de nacimiento" onChange={handleChangeFNacimiento}/>
      </Form.Group>
    <Form.Group>
    <Form.Label  className="text-left">Ocupacion</Form.Label>
    <Form.Select aria-label="Default select example" onChange={handleChangeOcupacion}> 
      <option>seleccione ocupacion...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form.Group>
      
   

      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>

            </Col>
        </Row>
   
    
    </Container>
  )
}

export default NuevoCenso