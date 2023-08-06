import React from 'react'
import Grafica from './Grafica';

function GraficaPersonasPorOcupacion({ datos }) {
    const etiquetas = datos.map(dato => dato.ocupacionNombre);
    const valores = datos.map(dato => dato.cantidadPersonas);

    return (
        <Grafica etiquetas={etiquetas} valores={valores} nombreGrafica="Personas por Ocupación" nombreDatos="Total Personas" />
    );
}

export default GraficaPersonasPorOcupacion
