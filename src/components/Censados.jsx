import React from 'react'
import Table from 'react-bootstrap/Table';
import '../Estilos/MiEstilos.css'
import { useDispatch,useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';


function Censados() {

 const datos=useSelector((state)=>state.listaCensados);
 
   const lista=[
    {id:1,nombre:"nombre1",departamento:1},
    {id:2,nombre:"nombre2",departamento:2},
    {id:3,nombre:"nombre3",departamento:3},
    {id:4,nombre:"nombre4",departamento:3}
   ]
   


  return (
    <Table  striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Fecha de Nacimiento</th>
          <th>Acciones</th>
          
        </tr>
      </thead>
      <tbody>
       
          {
            datos.map( (item,index)=>
            <tr key={index}> 
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.fechaNacimiento}</td>
            <td><Button variant="danger">Eliminar</Button></td>

            </tr>
              )
          }
          
         
          
       
       
      </tbody>
    </Table>
  )
}

export default Censados