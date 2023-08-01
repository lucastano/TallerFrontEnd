import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch,useSelector, useStore } from 'react-redux';

function TotalCensados() {

    const censados=useSelector((state)=>state.listaCensados);
    const departamentos=useSelector((state)=>state.listaDepartamentos);
    const montevideo=departamentos.find(d=>d.nombre=='Montevideo');
    const censadosMontevideo=censados.filter(c=>c.departamento==montevideo.id);
    const interior=censados.filter(c=>c.departamento!=montevideo.id);
    
  return (
    <>
    <Container>
        <Row className="row justify-content-center align-items-center">
            <Col md={8}>
            <Table striped bordered hover style={{textAlign: 'center'}}>
      <thead>
        <tr>
          <th>Total Censados</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{censados.length}</td>
          
        </tr>
        
      </tbody>
    </Table>
            </Col>
        </Row>
        <Row className="row justify-content-center align-items-center">
        <Col md={6}>
        <Table striped bordered hover style={{textAlign: 'center'}}>
      <thead>
        <tr>
          <th>Montevideo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{censadosMontevideo.length}</td>
          
        </tr>
        
      </tbody>
    </Table>



        </Col>


        <Col md={6}>
        <Table striped bordered hover style={{textAlign: 'center'}}>
      <thead>
        <tr>
          <th>Interior del pais</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{interior.length}</td>
          
        </tr>
        
      </tbody>
    </Table>
        </Col>
        </Row>
    </Container>

    </>
  )
}

export default TotalCensados