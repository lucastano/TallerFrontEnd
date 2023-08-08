import React, { useState } from 'react'

function CunetaRegresiva() {
    const [daysRemaining, setDaysRemaining] = useState(0);
    const targetDate='31/08/2023'

  useEffect(() => {
    const interval = setInterval(() => {
      const fechaActual = new Date().getTime();
      const difference = targetDate - fechaActual;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDaysRemaining(days);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div>CunetaRegresiva</div>
  )
}

export default CunetaRegresiva