import { useState } from 'react'

import './App.css'
import Usuario from './components/Usuario';
import 'bootstrap/dist/css/bootstrap.min.css';


const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Usuario></Usuario>
    </div>
    
      
    
  )
}

export default App
