import React, { useState,useEffect } from 'react'
import { Container, Row,Col, Image,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch,useSelector, useStore } from 'react-redux';
import NuevoCenso from './NuevoCenso';
import GraficaPersonasPorDepartamento from './graficas/GraficaPersonasPorDepartamento';
import GraficaPersonasPorOcupacion from './graficas/GraficaPersonasPorOcupacion';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import MapaCensos from './MapaCensos';

function TotalCensados() {

    const censados=useSelector((state)=>state.listaCensados);
    const departamentos=useSelector((state)=>state.listaDepartamentos);
    const ocupaciones=useSelector((state)=>state.listaOcupaciones);
    const montevideo=departamentos.find(d=>d.nombre=='Montevideo');
    const censadosMontevideo=censados.filter(c=>c.departamento==montevideo.id);
    const interior=censados.filter(c=>c.departamento!=montevideo.id);
    const usuarioId=localStorage.getItem('id');
    const nombre=localStorage.getItem('nombre');
    //total de censados del sistema 
    const totalCensados=useSelector((state)=>state.totalCensados);
    const [porcentajeCensados, setPorcentajeCensados] = useState(0)
    const navigate=useNavigate();

    console.log('ocupaciones EN totalcensados', ocupaciones)

    useEffect(() => {
      if(censados==undefined){

      }else{
      const porcentaje=(censados.length*100)/totalCensados;
      const numeroRedondeado=Number(porcentaje.toFixed(3));

      setPorcentajeCensados(numeroRedondeado);
      }
      
      
    }, [censados]);

    //GraficaPersonasPorDepartamento
    // const datosGraficaDepartamentos = departamentos.map(depto => {
    //   const cantidadPersonas = censados.filter(c => c.departamento === depto.id).length;
    //   return { departamentoNombre: depto.nombre, cantidadPersonas };
    // });
    // const personasCensadasPorDpto = datosGraficaDepartamentos.some(dato => dato.cantidadPersonas > 0);
    
    // Personas censadas por ocupacion
    // const datosGraficaOcupaciones = ocupaciones.map(ocupacion => {
    //   const cantidadPersonas = censados.filter(c => c.ocupacion === ocupacion.id).length;
    //   return { ocupacionNombre: ocupacion.ocupacion, cantidadPersonas };
    // });

    // console.log('datosGraficaOcupaciones', datosGraficaOcupaciones)
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
              <div  style={{backgroundColor:'#F7F7F6 ',textAlign:'center'}}>
                <div className='div-censados-metricas' >
                  hola
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
            <div style={{backgroundColor:'#F7F7F6 ',textAlign:'center'}}>
                <div>Procentaje
                  <div>
                    <h3>{porcentajeCensados?porcentajeCensados:0}%</h3>
                    <p>Porcentaje de censos realizado sobre el total</p>
                  </div>
                </div>
              </div>
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
            <div style={{backgroundColor:'white'}} >
              <div>
              <Button onClick={()=>navigate("/nuevo")} variant="success">+ Agregar nuevo Censo</Button>{' '}
              </div>
            </div>
           </Col>

           <Col   sm={12} lg={6}>
            <div style={{backgroundColor:'white'}} >
              <div>
              <Button onClick={()=>navigate("/censados")} variant="info">Ver mis Censados</Button>{' '}

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




