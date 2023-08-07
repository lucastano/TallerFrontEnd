import React from 'react'
import Grafica from './Grafica';
import { useSelector } from 'react-redux';

function GraficaPersonasPorOcupacion() {

    const ocupaciones=useSelector(state=>state.listaOcupaciones);
    const censados=useSelector(state=>state.listaCensados);
    
    const callback=(acc,val)=>{
        if(acc[val.ocupacion]){
            acc[val.ocupacion]=acc[val.ocupacion]+1;
        }
        else{
            acc[val.ocupacion]=1;
        }
        return acc;
    }

    const resultado=censados.reduce(callback,{});
    const valores=Object.values(resultado);
    const etiquetas=Object.keys(resultado);

    const etiquetasConNombre=etiquetas.map(
        e=>{
            const ocupacion=ocupaciones.find(o=>o.id==e)
            return ocupacion.ocupacion;
        }
    )

    return (
        <Grafica etiquetas={etiquetasConNombre} valores={valores} nombreGrafica="Personas por Ocupación" nombreDatos="Total Personas" />
    );
}

export default GraficaPersonasPorOcupacion
