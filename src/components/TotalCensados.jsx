import React, { useState,useEffect } from 'react'
import { Container, Row,Col, Image,Button ,Form} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch,useSelector, useStore } from 'react-redux';
import NuevoCenso from './NuevoCenso';
import GraficaPersonasPorDepartamento from './graficas/GraficaPersonasPorDepartamento';

function TotalCensados() {

    const censados=useSelector((state)=>state.listaCensados);
    const departamentos=useSelector((state)=>state.listaDepartamentos);
    const montevideo=departamentos.find(d=>d.nombre=='Montevideo');
    const censadosMontevideo=censados.filter(c=>c.departamento==montevideo.id);
    const interior=censados.filter(c=>c.departamento!=montevideo.id);
    const usuarioId=localStorage.getItem('id');
    const nombre=localStorage.getItem('nombre');
    //total de censados del sistema 
    const totalCensados=useSelector((state)=>state.totalCensados);
    const [porcentajeCensados, setPorcentajeCensados] = useState(0)

    useEffect(() => {
      if(censados==undefined){

      }else{
      const porcentaje=(censados.length*100)/totalCensados;

      setPorcentajeCensados(porcentaje);
      }
      
    }, [censados]);

    //GraficaPersonasPorDepartamento
    const datosGraficaDepartamentos = departamentos.map(depto => {
      const cantidadPersonas = censados.filter(c => c.departamento === depto.id).length;
      return { departamentoNombre: depto.nombre, cantidadPersonas };
    });
    const personasCensadasPorDpto = datosGraficaDepartamentos.some(dato => dato.cantidadPersonas > 0);
    
    //Personas censadas por ocupacion
    // const datosGraficaOcupaciones = ocupaciones.map(ocupacion => {
    //   const cantidadPersonas = censados.filter(c => c.ocupacion === ocupacion.id).length;
    //   return { ocupacionNombre: ocupacion.nombre, cantidadPersonas };
    // });
    // const personasCensadasPorOcupacion = datosGraficaOcupaciones.some(dato => dato.cantidadPersonas > 0);



    

    
  return (
    <Container style={{backgroundColor:'#ECEEEB'}}>
      <Row >
        <Col style={{width:'375px', height:'600px'}}  sm={1} className="d-flex justify-content-center align-items-center" >

          <div style={{backgroundColor:'#F7F7F6 ',width:'365px', height:'580px', padding:'25px'}}>
            <h3 style={{textAlign:'center'}}>Usuario</h3>
            <Image className="img-fluid d-block" src='src/assets/imagenes/usuario.jpg' rounded />
            <p style={{textAlign:'center'}}>Id de Usuario: {usuarioId}</p>
            <p style={{textAlign:'center'}}>Nombre: {nombre}</p>
          </div> 
        </Col>

        <Col sm={9}>
          {/*Columna de contenido, aca va a ir  censados totales, graficas*/}
          <Row  >
            <Col className='col-censados-metricas'  sm={12} lg={4}>
              <div  style={{textAlign:'center'}}>
                <div className='div-censados-metricas'  style={{backgroundColor:'#F7F7F6',borderRadius:'9px'}}>censados totales
                  <div >{censados.length}</div>
                </div>

                <div className='div-censados-metricas' style={{backgroundColor:'#F7F7F6',borderRadius:'9px'}}>censados Montevideo
                  <div className='div-censados-metricas'>{censadosMontevideo.length}</div>
                </div>

                <div className='div-censados-metricas' style={{backgroundColor:'#F7F7F6 ',borderRadius:'9px'}}>censados interior
                  <div className='div-censados-metricas' >{interior.length}</div>
                </div>
              </div>
            </Col>

            <Col className='col-censados-metricas'  sm={12} lg={4}>
              <div style={{backgroundColor:'#F7F7F6 ',textAlign:'center'}}>
                <div>Procentaje
                  <div>
                    <h3>{porcentajeCensados?porcentajeCensados:0}%</h3>
                    <p>Porcentaje de censos realizado sobre el total</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col className='col-censados-metricas'  sm={12} lg={4}>
              <div className='div-censados-metricas' style={{backgroundColor:'#F7F7F6 ',textAlign:'center'}}>
                <div className='form-censados-metricas'>
                  <NuevoCenso></NuevoCenso>
                </div>
              </div>
            </Col>
          </Row>

          <Row gx-4>
            <Col  sm={12} lg={6}>
              {personasCensadasPorDpto ? (
                <GraficaPersonasPorDepartamento datos={datosGraficaDepartamentos} />
              ) : (
                  <p>No hay ninguna persona censada.</p>
              )}
            </Col>
            <Col  sm={12} lg={6}>
              {/* {personasCensadasPorOcupacion ? (
                <GraficaPersonasPorOcupacion datos={datosGraficaOcupaciones} />
              ) : (
                  <p>No hay ninguna persona censada.</p>
              )} */}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default TotalCensados




{/* <Form className='formulario-todoEnUno'>
      <Form.Group   controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Departamento</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}