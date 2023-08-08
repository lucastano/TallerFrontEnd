import React from 'react'
import { Col, Row,Container, Carousel } from 'react-bootstrap';

import  Nav  from 'react-bootstrap/Nav'
import  Navbar  from 'react-bootstrap/Navbar'
import { useNavigate, NavLink, Navigate } from "react-router-dom";


function Menu() {

    const itemsMenu=[
        
        
        {path:"/censados",title:"Mis Censados"},
        {path:"/nuevo",title:"Censar Persona"},
        {path:"/totalCensados",title:"Total censados"}
    ]

  

  return (

   
    <Row>
      <Col sm={12}>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {itemsMenu.map((m) => (
              <NavLink
                key={m.title}
                to={m.path}
                style={({ isActive }) =>
                  isActive
                    ? { color: "red", marginRight: "20px" }
                    : { color: "white", marginRight: "20px" }
                }
                className="nav-link"
              >
                {m.title}
              </NavLink>
            ))}
          </Nav>
          <Nav className="ml-auto">
            {/* Alineación a la derecha */}
            <NavLink
              key="Log Out"
              to="/logout"
              style={({ isActive }) =>
                isActive
                  ? { color: "red", marginRight: "20px" }
                  : { color: "white", marginRight: "20px" }
              }
              className="nav-link"
            >
              LogOut
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Col>
    </Row>

  )
}

export default Menu

{/* <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>App</Navbar.Brand>
        <Nav className="me-auto">
          {
            itemsMenu.map(m =>
              <NavLink key={m.title} to={m.path} style={({ isActive }) => (isActive ? { color: "red", marginRight: '20px' } : { color: "white", marginRight: '20px' })}>
                {m.title}
              </NavLink>
            )
          }
        </Nav>
        <Nav className="ml-auto"> {/* Alineación a la derecha */}
    //       <NavLink key="Log Out" to="/logout" style={({ isActive }) => (isActive ? { color: "red", marginRight: '20px' } : { color: "white", marginRight: '20px' })}>
    //         LogOut
    //       </NavLink>
    //     </Nav>
    //   </Container>
    // </Navbar> */}