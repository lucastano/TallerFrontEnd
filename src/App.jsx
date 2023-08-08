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
import Registro from './components/Registro';
import TotalCensados from './components/TotalCensados';


const App=()=> {
  const [count, setCount] = useState(0)

  return (


    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/registro" element={<Registro />}></Route>

    <Route path="/" element={<Dashboard />}> 
     <Route index element={<TotalCensados/>}></Route>

       <Route path="/usuario" element={<DatosUsuario/>}></Route>
       <Route path="/logout" element={<Logout/>}></Route> 
       <Route path="/censados" element={<Censados/>}></Route>
       <Route path="/nuevo" element={<NuevoCenso/>}></Route> 
       <Route path="/totalCensados" element={<TotalCensados/>}></Route> 

    </Route>

    <Route path="*" element={<Navigate replace to={"/"}></Navigate>} />

    </Routes>
    </BrowserRouter>
    
    
    
      
    
  )
}

export default App
