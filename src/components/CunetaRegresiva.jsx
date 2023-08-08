import React, { useState, useEffect } from 'react';
import { differenceInDays, format } from 'date-fns';

function CuentaRegresiva() {
  // Fecha de finalización del censo 
  const fechaFinalCenso = new Date(2023, 7, 31); 

  const [diasRestantes, setDiasRestantes] = useState(null);

  useEffect(() => {
    // Calcula la diferencia en días entre la fecha actual y la fecha final del censo
    const diffInDays = differenceInDays(fechaFinalCenso, new Date());
    setDiasRestantes(diffInDays);
  }, []);

  return (
    <div>
      {diasRestantes !== null ? (
        <p>Tiempo restante para el final del censo: <strong>{diasRestantes} días</strong></p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default CuentaRegresiva;