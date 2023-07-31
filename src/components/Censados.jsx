import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../Estilos/MiEstilos.css'
import { useDispatch,useSelector, useStore } from 'react-redux';
import { Button } from 'react-bootstrap';
import { borrarCensado } from '../redux/features/censadosSlice';



function Censados() {

 const dispatch=useDispatch();
 const datos=useSelector((state)=>state.listaCensados);
 const ocupaciones=useSelector((state)=>state.listaOcupaciones);
 const departamentos=useSelector((state)=>state.listaDepartamentos);
 const todasLasCiudades=useSelector((state)=>state.listaCiudades);
 
 console.log("datos antes",todasLasCiudades);



// const nuevo = datos.map((persona) => ({
//   ...persona,
//   idDepartamento:persona.departamento,
//   idOcupacion:persona.ocupacion,
//   idCiudad:persona.ciudad,
//   ocupacion: ocupaciones.find(o=>o.id==persona.ocupacion).ocupacion,
//   departamento: departamentos.find(d=>d.id==persona.departamento).nombre,
//    ciudad:todasLasCiudades.find(c=>c.id==persona.ciudad).nombre
// }));

console.log('ocupaciones', ocupaciones)


 const handleClikEliminar=(e)=>{
  const id=e.target.value;
  dispatch(borrarCensado(id))
 }

 



 if (!datos || !ocupaciones || !departamentos) {
  
  return <p>Cargando...</p>
   // o cualquier indicador de carga que desees mostrar
}


  return (
    <Table  striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
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
            datos.map( (item)=>
            <tr key={item.id}> 
            <td >{item.id}</td>
            <td >{item.nombre}</td>
            <td >{item.fechaNacimiento}</td>
            <td >{ocupaciones.find( o=>o.id==item.ocupacion).ocupacion }</td>
            <td >{departamentos.find(d=>d.id==item.departamento).nombre}</td> 
            <td >{todasLasCiudades.find(c=>c.id==item.ciudad).nombre}</td>
            
            <td><Button variant="danger" value={item.id} onClick={handleClikEliminar} >Eliminar</Button></td>

            </tr>
              )
          }
          
         
          
       
       
      </tbody>
    </Table>
  )
}

export default Censados