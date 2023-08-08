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
    //departamentos en lugar de censados

   const markersData= departamentos.map(
        departamento=>{
            const marca={
                lat:departamento.latitud,
                lng:departamento.longitud,
                titulo:departamento.nombre,
                contenido:censos.filter(c=>c.departamento==departamento.id).length
            }
            return marca
        }
    )
   


  return (
    <Mapa markersData={markersData}  ></Mapa>
  )
}

export default MapaCensos