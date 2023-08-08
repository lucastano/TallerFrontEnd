import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

import { Col, Row } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { obtenerCiudades,nuevoCenso } from '../Servicios/Services'
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { cargaInicialCiudades } from '../redux/features/ciudadesSlice';
import { agregarCensado } from '../redux/features/censadosSlice';
import { aumentarTotalCensados } from '../redux/features/totalCensadosSlice';
import '../Estilos/MiEstilos.css'
import { toast } from 'react-toastify';
import { InputLabel, FormControl,Select, MenuItem} from '@mui/material';




function NuevoCenso() {
    const [nombre, setNombre] = useState('')
    const [departamento, setDepartamento] = useState(0)
    const [ciudad, setCiudad] = useState('')
    const [nacimiento, setNacimiento] = useState('')
    const [ocupacion, setOcupacion] = useState('')
    const [mayor,setMayor]=useState(false);
    const [ciudadesDelDepartamento, setCiudadesDelDepartamento] = useState([])
    const [validated, setValidated] = useState(false)
    
    

    
    //usestate de usuario logeado
    const [nombreUsuario, setNombreUsuario] = useState("")
    const [userId, setUserId] = useState(0)
    const [token, setToken] = useState("")

    //useselectors
    const datosDepartamentos=useSelector((state)=>state.listaDepartamentos);
    const datosOcupaciones=useSelector((state)=>state.listaOcupaciones);
    const datosCiudades=useSelector((state)=>state.listaCiudades);
    const ocupacionMenores=[{id: 5, ocupacion: "Estudiante"}];

    

    
    
    //dispatch
    const dispatch=useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

      const token=localStorage.getItem('apiKey');
      const userId=localStorage.getItem('id');
      const nombre=localStorage.getItem('nombre');
      setToken(token);
      setNombreUsuario(nombre);
      setUserId(userId);

    }, [])
    
    

    const handleChangeNombre=(e)=>{
       setNombre(e.target.value);
       

    }
    const handleChangeDepartamento= async (e)=>{
      const idDepartamento=e.target.value;
        setDepartamento(e.target.value);
       
      const ciudades=datosCiudades.filter(c=>c.idDepartamento==idDepartamento);
      
       setCiudadesDelDepartamento(ciudades);
        

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
      // e.preventDefault();
      let control=true;
        const form=e.currentTarget;

        if(form.checkValidity()===false){
          e.preventDefault();
          
          e.stopPropagation();
        control=false;
        toast.error("Tiene que completar todos los campos");
        }
        setValidated(true);

        if(control){
          let censado={
            idUsuario:localStorage.getItem('id'),
            nombre:nombre,
            departamento:departamento,
            ciudad:ciudad,
            fechaNacimiento:nacimiento,
            ocupacion:ocupacion

        };
        
   
         agregar(censado);
         toast.success("se agrego correctamente");
         navigate("/censados");

        }
           
        
       
        
         


    }

    const agregar= async(censado)=>{

     
    const apikey=localStorage.getItem('apiKey');
    const iduser=localStorage.getItem('id');
    const respuesta= await nuevoCenso(censado,apikey,iduser);
    censado.id=respuesta.idCenso;
   
    dispatch(agregarCensado(censado));
    dispatch(aumentarTotalCensados());

    }

    

    
  return (

    <Container>
        <Row >
            <Col xs={12}>
            <Form noValidate validated={validated} onSubmit={handleClick} className="my-form" >

            <Form.Group className="mb-3" controlId="validationCustom01">

            <Form.Label  className="text-left label-blanco">Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre" onChange={handleChangeNombre} required />
        

           </Form.Group>
           <Form.Group controlId="validationCustom02">

           <Form.Label  className="text-left label-blanco">Departamento</Form.Label>
           <Form.Select as="select"  aria-label="Default select example" value={departamento} onChange={handleChangeDepartamento} required> 
            <option value={""}>seleccione departamento...</option>
              {
               datosDepartamentos.map((item,index)=>
               <option key={index} value={item.id}>{item.nombre}</option>
               )
              }

               </Form.Select>



</Form.Group> 

           


    <Form.Group controlId="validationCustom03">
    <Form.Label  className="text-left label-blanco">Ciudad</Form.Label>
    <Form.Select as="select" aria-label="Default select example"  required onChange={handleChangeCiudad}> 
    <option value={""} >Seleccione una ciudad...</option>
      {
        ciudadesDelDepartamento.map(c=> <option key={c.id} value={c.id}>{c.nombre}</option>)
      }

      
      
    </Form.Select>
    
    </Form.Group>
    <Form.Group className="mb-3" controlId="validationCustom04">
        <Form.Label  className="text-left label-blanco">Fecha de nacimiento</Form.Label>
        <Form.Control type="Date" placeholder="Ingrese fecha de nacimiento" required onChange={handleChangeFNacimiento}/>
        
      </Form.Group>
    <Form.Group controlId="validationCustom05">
    <Form.Label  className="text-left label-blanco">Ocupacion</Form.Label>
    <Form.Select as="select" aria-label="Default select example" required onChange={handleChangeOcupacion}> 
    <option value={""}>seleccione ocupacion...</option>
    {
      mayor?ocupacionMenores.map(item=><option key={item.id} value={item.id}>{item.ocupacion}</option>)
      :datosOcupaciones.map(item=><option key={item.id} value={item.id}>{item.ocupacion}</option>)
    }
      

    </Form.Select>
    
    </Form.Group>
    
   <Form.Group>
     <Button variant="primary" type="submit" >
        Guardar
      </Button>
   </Form.Group>

   
     
    </Form>

            </Col>
        </Row>
        
       


        </Container>
   
    
    
  )
}

export default NuevoCenso




 