import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Outlet } from 'react-router-dom'


function DatosUsuario() {
  const [usuario, setUsuario] = useState({})
  useEffect(() => {
    let nombre=localStorage.getItem("nombre");
    let id=localStorage.getItem("id");
    const usuarioLogeado={id:id,nombre:nombre};
    setUsuario(usuarioLogeado);
    console.log(nombre,"en datos usuario")
    
  }, [])
  
  return (
    <>
  
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Usuario</Card.Title>
        <Card.Text>
         {`Nombre : ${usuario.nombre} Id: ${usuario.id}`}
        </Card.Text>
      
      </Card.Body>
    </Card> 
    
    </>
  )
}

export default DatosUsuario