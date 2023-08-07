import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



function Grafica({ etiquetas, valores, nombreGrafica, nombreDatos }) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: nombreGrafica,
            },
        },
    };

    const labels = etiquetas;
    //x

    const data = {
        labels,
        datasets: [
            {
                label: nombreDatos,
                data: valores,
                backgroundColor: 'rgba(140, 6, 6, 0.5)',
            }
        ],
    };


    return <Bar options={options} data={data} />;
}


export default Grafica