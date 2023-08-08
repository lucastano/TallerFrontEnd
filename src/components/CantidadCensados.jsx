import React from 'react'
import { useSelector } from 'react-redux'

function CantidadCensados() {

    const censados=useSelector(state=>state.listaCensados);
    const departamentos=useSelector(state=>state.listaDepartamentos);
    const montevideo=departamentos.find(d=>d.nombre=='Montevideo');
    const censadosMontevideo=censados.filter(c=>c.departamento==montevideo.id);
    const interior=censados.filter(c=>c.departamento!=montevideo.id);


  return (
    <div  style={{textAlign:'center'}}>
    <div className='div-censados-metricas'  style={{backgroundColor:'#F7F7F6',borderRadius:'9px'}}><strong>Censados totales</strong>
      <div >{censados.length}</div>
    </div>

    <div className='div-censados-metricas' style={{backgroundColor:'#F7F7F6',borderRadius:'9px'}}><strong>Censados Montevideo</strong>
      <div className='div-censados-metricas'>{censadosMontevideo.length}</div>
    </div>

    <div className='div-censados-metricas' style={{backgroundColor:'#F7F7F6 ',borderRadius:'9px'}}><strong>Censados interior</strong>
      <div className='div-censados-metricas' >{interior.length}</div>
    </div>
  </div>
    
   
  )
}

export default CantidadCensados