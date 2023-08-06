import React from 'react'
import Grafica from './Grafica';

function GraficaPersonasPorDepartamento({ datos }) {
    const etiquetas = datos.map(dato => dato.departamentoNombre);
    const valores = datos.map(dato => dato.cantidadPersonas);

    return <Grafica etiquetas={etiquetas} valores={valores} nombreGrafica="Personas Censadas por Departamento" nombreDatos="Cantidad de Personas" />;
}

export default GraficaPersonasPorDepartamento;
