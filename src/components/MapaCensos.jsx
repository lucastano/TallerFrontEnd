import React from 'react'
import Mapa from './Mapa'
import { useSelector } from 'react-redux'

function MapaCensos() {
    const censos=useSelector(state=>state.listaCensados);
    const departamentos=useSelector(state=>state.listaDepartamentos);
    
    //tengo que crear el mark que recibe mapa
    //mark tiene latitud, longitud ,titulo y contenido
    //latitud y longitud no estan en la lista de censos, esos datos lo tiene el departamento
    //contenido nos devuelve el total de censados para ese departamento
   const markersData= censos.map(
        censado=>{
            const marca={
                lat:departamentos.find(d=>d.id==censado.departamento).latitud,
                lng:departamentos.find(d=>d.id==censado.departamento).longitud,
                titulo:departamentos.find(d=>d.id==censado.departamento).nombre,
                contenido:censos.filter(c=>c.departamento==censado.departamento).length
            }
            return marca
        }
    )
console.log('markersData', markersData)

  return (
    <Mapa markersData={markersData}  ></Mapa>
  )
}

export default MapaCensos