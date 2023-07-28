import { useState } from 'react'
import './App.css'
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DatosUsuario from './components/DatosUsuario';
import Logout from './components/Logout';
import Censados from './components/Censados';
import NuevoCenso from './components/NuevoCenso';


const App=()=> {
  const [count, setCount] = useState(0)

  return (


    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />}></Route>

    <Route path="/" element={<Dashboard />}> 

       <Route path="/usuario" element={<DatosUsuario/>}></Route>
       <Route path="/logout" element={<Logout/>}></Route> 
       <Route path="/censados" element={<Censados/>}></Route>
       <Route path="/nuevo" element={<NuevoCenso/>}></Route>  

    </Route>

    <Route path="*" element={<Navigate replace to={"/"}></Navigate>} />

    </Routes>
    </BrowserRouter>
    
    
    
      
    
  )
}

export default App