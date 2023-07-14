import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CuerpoLogin from './components/CuerpoLogin';
import 'bootstrap/dist/css/bootstrap.min.css';


const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <div>
     <CuerpoLogin></CuerpoLogin>
    </div>
    
      
    
  )
}

export default App
