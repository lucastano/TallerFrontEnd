import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../Estilos/MiEstilos.css'
import { useDispatch,useSelector, useStore } from 'react-redux';
import { Button, Container, Row,Col } from 'react-bootstrap';
import { borrarCensado } from '../redux/features/censadosSlice';
import { eliminarCensado } from '../Servicios/Services';
import { useObtenerNombreDepartamento,useObtenerNombreCiudad,useObtenerNombreOcupacion } from '../util/useObtenerDatos';




function Censados() {

 const dispatch=useDispatch();
 const datos=useSelector((state)=>state.listaCensados);
 const ocupaciones=useSelector((state)=>state.listaOcupaciones);
 const departamentos=useSelector((state)=>state.listaDepartamentos);
 const todasLasCiudades=useSelector((state)=>state.listaCiudades);
 const obtenerDepartamento=useObtenerNombreDepartamento();
 const obtenerCiudad=useObtenerNombreCiudad();
 const obtenerOcupacion=useObtenerNombreOcupacion();



console.log('datos', datos)

 const handleClikEliminar=(e)=>{
  const id=e.target.value;
  eliminar(id)
  
 }

 const eliminar=async(idCenso)=>{
  const iduser=localStorage.getItem('id');
  console.log('idUsuario', iduser)
  const apikey=localStorage.getItem('apiKey');
  console.log('apikey', apikey)
  const respuesta=await eliminarCensado(apikey,iduser,idCenso);
  console.log('respuesta', respuesta)
  //ELIMINA BIEN , FALTA CONTROLAR RESPUESTA API PARA HACER EL DISPATCH
  dispatch(borrarCensado(idCenso))

 }



 if (!datos || !ocupaciones || !departamentos) {
  console.log("ACA ENTRO")
  return <p>Cargando...</p>
   // o cualquier indicador de carga que desees mostrar
}

//controlar cuando no hay datos !!!!
  return (
    <>
    
    <Container>
    <Row>
      <Col md={12}>
        <Table className="custom-table" striped bordered hover >
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
            datos ? (
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
              <tr>
                <td colSpan="6">No hay datos</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
  
  </>
  )
}

export default Censados

{/* <Container>
<Row >
  <Col md={12}>
  <Table  striped bordered hover>
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
      datos?
      datos.map( (item)=>
      <tr key={item.id}> 
      
      <td >{item.nombre}</td>
      <td >{item.fechaNacimiento}</td>
      <td >{ocupaciones.find( o=>o.id==item.ocupacion).ocupacion }</td>
      <td >{departamentos.find(d=>d.id==item.departamento).nombre}</td> 
      <td >{todasLasCiudades.find(c=>c.id==item.ciudad).nombre}</td>
      
      <td><Button variant="danger" value={item.id} onClick={handleClikEliminar} >Eliminar</Button></td>

      </tr>
        )
        :console.log("no hay datos")
    }
    
   
    
 
 
</tbody>
</Table>


  </Col>
</Row>
</Container> */}

// ----------------------------------------------------------------
// <td>{item.fechaNacimiento}</td>
//                   <td>{ocupaciones.find((o) => o.id === item.ocupacion).ocupacion}</td>
//                   <td>{departamentos.find((d) => d.id === item.departamento).nombre}</td>
//                   <td>{todasLasCiudades.find((c) => c.id === item.ciudad).nombre}</td>