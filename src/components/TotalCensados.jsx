import React, { useState,useEffect } from 'react'
import { Container, Row,Col, Image,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch,useSelector, useStore } from 'react-redux';
import NuevoCenso from './NuevoCenso';
import GraficaPersonasPorDepartamento from './graficas/GraficaPersonasPorDepartamento';
import GraficaPersonasPorOcupacion from './graficas/GraficaPersonasPorOcupacion';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import MapaCensos from './MapaCensos';
import CantidadCensados from './CantidadCensados';
import PorcentajeCensados from './PorcentajeCensados';



function TotalCensados() {

    const censados=useSelector((state)=>state.listaCensados);
    const departamentos=useSelector((state)=>state.listaDepartamentos);
    const ocupaciones=useSelector((state)=>state.listaOcupaciones);
   
    const usuarioId=localStorage.getItem('id');
    const nombre=localStorage.getItem('nombre');
    //total de censados del sistema 
    const totalCensados=useSelector((state)=>state.totalCensados);
    const [porcentajeCensados, setPorcentajeCensados] = useState(0)
    const navigate=useNavigate();

    

    useEffect(() => {
      if(censados==undefined){

      }else{
      const porcentaje=(censados.length*100)/totalCensados;
      const numeroRedondeado=Number(porcentaje.toFixed(3));

      setPorcentajeCensados(numeroRedondeado);
      }
      
      
    }, [censados]);


  return (
    <Container style={{backgroundColor:'#ECEEEB', marginTop:"2%"}}>
      <Row style={{justifyContent: 'center'}} >
        <Col style={{width:'375px', height:'600px', paddingTop:"10px"}}  sm={1}  >

          <div   style={{backgroundColor:'#F7F7F6 ',width:'365px', height:'580px', padding:'25px'}}>
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
               <CantidadCensados></CantidadCensados>
            </Col>

            <Col className='col-censados-metricas'  sm={12} lg={4}>
              <div style={{backgroundColor:'#F7F7F6 ',textAlign:'center' ,height:'95%'}}>
                <div>
                {censados ? (
                <GraficaPersonasPorDepartamento/>
              ) : (
                  <p>No hay ninguna persona censada.</p>
              )}
                </div>
              </div>
            </Col>

            <Col className='col-censados-metricas'  sm={12} lg={4}>
              <div  style={{backgroundColor:'#F7F7F6 ',textAlign:'center', height:'95%'}}>
                <div className='div-censados-metricas' >
                 
                {censados ? (
                <GraficaPersonasPorOcupacion />
              ) : (
                  <p>No hay ninguna persona censada.</p>
              )}
                </div>
              </div>
            </Col>
          </Row>

          <Row >
            <Col sm={12} lg={6}>
           <PorcentajeCensados></PorcentajeCensados>
            </Col>
            <Col    sm={12} lg={6}>
              <div className='div-censados-metricas' style={{backgroundColor:'white'}}>
                <div>
                <MapaCensos></MapaCensos>

                </div>
              </div>
            </Col>
          </Row>
          <Row>

           <Col   sm={12} lg={6}>
            <div  >
              <div className='div-censados-metricas'>
              <Button onClick={()=>navigate("/nuevo")} variant="primary">+ Agregar nuevo Censo</Button>{' '}
              </div>
            </div>
           </Col>

           <Col   sm={12} lg={6}>
            <div  >
              <div className='div-censados-metricas' >
              <Button onClick={()=>navigate("/censados")} variant="success">Ver mis Censados</Button>{' '}

              </div>
            </div>
           </Col>
           

          </Row>
        </Col>
      </Row>
      
    </Container>
  )
}

export default TotalCensados




