import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';


function NuevoCenso() {
    const [nombre, setNombre] = useState('')
    const [departamento, setDepartamento] = useState(0)
    const [ciudad, setCiudad] = useState('')
    const [nacimiento, setNacimiento] = useState('')
    const [ocupacion, setOcupacion] = useState('')
    const [mayor,setMayor]=useState(false);

    const datosDepartamentos=useSelector((state)=>state.listaDepartamentos);
    const datosOcupaciones=useSelector((state)=>state.listaOcupaciones);
    const ocupacionMenores=[{id: 5, ocupacion: "Estudiante"}];
    
    

    const handleChangeNombre=(e)=>{
       setNombre(e.target.value);

    }
    const handleChangeDepartamento=(e)=>{
        setDepartamento(e.target.value);
        console.log(e.target.value);

    }
    const handleChangeCiudad=(e)=>{
        setCiudad(e.target.value);

    }
    const handleChangeFNacimiento=(e)=>{
       setNacimiento(e.target.value)
       let fechaActual=new Date();
      
       let fechaNacimiento= new Date(e.target.value);
      let edad=fechaActual.getFullYear()-fechaNacimiento.getFullYear();
       
      const mesActual = fechaActual.getMonth();
      const mesNacimiento = fechaNacimiento.getMonth();
      const diaActual = fechaActual.getDate();
      const diaNacimiento = fechaNacimiento.getDate();
    
      if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
      }
       
      if(edad<=18){
        setMayor(true)

      }else{
        setMayor(false)
      }
      

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
     {
      datosDepartamentos.map((item,index)=>
       <option key={index} value={item.id_pais}>{item.nombre}</option>
      )
     }
      
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
    <option>seleccione ciudad...</option>
    {
      mayor?ocupacionMenores.map(item=><option key={item.id} value={item.id}>{item.ocupacion}</option>)
      :datosOcupaciones.map(item=><option key={item.id} value={item.id}>{item.ocupacion}</option>)
    }
      

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