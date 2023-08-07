import React from 'react'
import Grafica from './Grafica';
import { useSelector } from 'react-redux';

function GraficaPersonasPorDepartamento() {

    const censados= useSelector(state=>state.listaCensados);
    const departamentos= useSelector(state=>state.listaDepartamentos);

    // resultado ={
    //     departamento : cantidadcensados
    // }
    const callback=(acc,val)=>{
        if(acc[val.departamento]){
            acc[val.departamento]=acc[val.departamento]+1;
        }else{
            acc[val.departamento]=1;
        }
        return acc;
    }
    const resultado= censados.reduce(callback,{});

    const valores=Object.values(resultado)
    const etiquetas=Object.keys(resultado)
    

    const etiquetasConNombre=etiquetas.map(
        e=>{
            const departamento=departamentos.find(d=>d.id==e)
            return departamento.nombre;
        }
    )


 
    

    return <Grafica etiquetas={etiquetasConNombre} valores={valores} nombreGrafica="Personas Censadas por Departamento" nombreDatos="Cantidad de Personas" />;
}

export default GraficaPersonasPorDepartamento;
