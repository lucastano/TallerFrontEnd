import React from 'react'
import  Container  from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import  Navbar  from 'react-bootstrap/Navbar'
import { useNavigate, NavLink, Navigate } from "react-router-dom";

function Menu() {

    const itemsMenu=[
        
        {path:"/usuario",title:"Mis Datos"},
        {path:"/censados",title:"Mis Censados"},
        {path:"/nuevo",title:"Censar Persona"}
    ]

    console.log(itemsMenu)

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand >App</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink key="Log Out" to="/logout" style={({isActive})=>(isActive?{color:"red", marginRight: '20px'}:{color: "white", marginRight: '20px'})}>LogOut</NavLink>
           {
            itemsMenu.map(m=> <NavLink key={m.title} to={m.path} style={({isActive})=>(isActive?{color:"red", marginRight: '20px'}:{color: "white", marginRight: '20px'})}>{m.title}</NavLink>)
           }
           
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Menu