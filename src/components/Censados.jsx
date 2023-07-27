import React from 'react'
import Table from 'react-bootstrap/Table';
import '../Estilos/MiEstilos.css'


function Censados() {
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
          <th>Departamento</th>
          <th>Acciones</th>
          
        </tr>
      </thead>
      <tbody>
       
          {
            lista.map( (item,index)=>
            <tr key={index}> 
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.departamento}</td>

            </tr>
              )
          }
          
         
          
       
       
      </tbody>
    </Table>
  )
}

export default Censados