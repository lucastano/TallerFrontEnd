import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector, useStore } from 'react-redux';
import '../Estilos/MiEstilos.css'

function PorcentajeCensados() {
    const [porcentajeCensados,  setPorcentajeCensados,  ] = useState(0)
    const censados = useSelector(state=>state.listaCensados);
    const totalCensados=useSelector((state)=>state.totalCensados);
   
    const porcentaje=(censados.length*100)/totalCensados;
    const numeroRedondeado=Number(porcentaje.toFixed(3));
        
   
    

    
  return (
    <div>
                <div style={{backgroundColor:'#F7F7F6 ',textAlign:'center'}}>Procentaje
                  <div className='div-censados-metricas' >
                    <h3>{numeroRedondeado?numeroRedondeado:0}%</h3>
                    <p>Porcentaje de censos realizado sobre el total</p>
                  </div>
                </div>
                {/* aca va conteo */}
                <div style={{backgroundColor:'#F7F7F6 ',textAlign:'center'}}  >prueba
                  <div className='div-censados-metricas'>
                    <h3>{numeroRedondeado?numeroRedondeado:0}%</h3>
                    <p>Porcentaje de censos realizado sobre el total</p>
                  </div>
                </div>
    </div>
  )
}

export default PorcentajeCensados