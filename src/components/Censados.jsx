import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../Estilos/MiEstilos.css'
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { useDispatch,useSelector, useStore } from 'react-redux';
import { Button, Container, Row,Col, Form } from 'react-bootstrap';
import { borrarCensado } from '../redux/features/censadosSlice';
import { eliminarCensado } from '../Servicios/Services';
import { useObtenerNombreDepartamento,useObtenerNombreCiudad,useObtenerNombreOcupacion } from '../util/useObtenerDatos';
import { toast } from 'react-toastify';




function Censados() {
const navigate=useNavigate();
 const dispatch=useDispatch();

 const datos=useSelector((state)=>state.listaCensados);

 const ocupaciones=useSelector((state)=>state.listaOcupaciones);
 const departamentos=useSelector((state)=>state.listaDepartamentos);
 const todasLasCiudades=useSelector((state)=>state.listaCiudades);
 const [filtro, setFiltro] = useState("")
 const [datosFiltrados, setDatosFiltrados] = useState(datos)
 const obtenerDepartamento=useObtenerNombreDepartamento();
 const obtenerCiudad=useObtenerNombreCiudad();
 const obtenerOcupacion=useObtenerNombreOcupacion();
 

useEffect(() => {
  if(filtro!=""){
    const listaFiltrada=datos.filter(item=>item.ocupacion==filtro)
    setDatosFiltrados(listaFiltrada)
  }
  
}, [datos])


 const handleClikEliminar=(e)=>{
  
  const id=e.target.value;
  eliminar(id)
  
 }

 const eliminar=async(idCenso)=>{
  const iduser=localStorage.getItem('id');
  const apikey=localStorage.getItem('apiKey');
  const respuesta=await eliminarCensado(apikey,iduser,idCenso);
  
  toast.success("Se elimino correctamente");
  dispatch(borrarCensado(idCenso))

 }

 const handleSlcFiltro=(e)=>{
  const valor=e.target.value;
  setFiltro(valor)
  
   const listaFiltrada=datos.filter(item=>item.ocupacion==valor);
   setDatosFiltrados(listaFiltrada);
 }

 




  return (
    
    <Container>
      <div className='censados-style'>
      <Row className='fila-Censados justify-content-center align-items-center' >
        
        <Col className='columna-Censados ' sm={10}>
        <Form className='justify-content-center align-items-center' >
          
          <Form.Group>
          <Form.Label  className='text-left'></Form.Label>
            <Form.Select  arial-label="Default select example" onChange={handleSlcFiltro} >
              <option  value={""}>seleccione ocupacion...</option>
              {
                ocupaciones.map(item=><option key={item.id}  value={item.id}>{item.ocupacion}</option>)
              }
            </Form.Select>
          </Form.Group>
          
        </Form>
        </Col>
        <Col >
        <Form.Group>
        <Form.Label className='text-left'></Form.Label>
        <Button variant="success" onClick={()=>navigate("/nuevo")}>+</Button>{' '}
        </Form.Group>
        </Col>
        
      </Row>
    <Row>
      <Col none={12}>
        <div className="table-responsive table-censados">
        <Table className="custom-table-censados "  >
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha de Nacimiento</th>
              <th>Ocupacion</th>
              <th>Departamento</th>
              <th>Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
            filtro=="" ? (
              datos.length==0?
              <tr>
              <td colSpan="6">No hay datos disponibles.</td>
            </tr>:
              datos.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.fechaNacimiento}</td>
                  <td>{obtenerOcupacion(item.ocupacion)}</td>
                  <td>{obtenerDepartamento(item.departamento)}</td>
                  <td>{obtenerCiudad(item.ciudad)}</td>
                  <td>
                    <Button variant="danger" value={item.id} onClick={handleClikEliminar}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              datosFiltrados.length==0?
                
                <tr>
                <td colSpan="6">No hay datos disponibles.</td>
              </tr>:
              datosFiltrados.map((item) => (
                
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.fechaNacimiento}</td>
                  <td>{obtenerOcupacion(item.ocupacion)}</td>
                  <td>{obtenerDepartamento(item.departamento)}</td>
                  <td>{obtenerCiudad(item.ciudad)}</td>
                  <td>
                    <Button variant="danger" value={item.id} onClick={handleClikEliminar}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))
              
            )}
          </tbody>
        </Table>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
      
      </Col>
    </Row>
    </div>
    </Container>
    

  
 
  )
}

export default Censados

