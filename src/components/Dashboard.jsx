import React from 'react'
import '../Estilos/MiEstilos.css'
import { useEffect,useState } from 'react';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import Menu from './Menu'
import { Outlet } from 'react-router-dom'

function Dashboard() {
const [usuarioLogeado, setUsuarioLogeado] = useState(undefined);
const navigate = useNavigate();

  useEffect(() => {

    const token=localStorage.getItem('apiKey');
    const userId=localStorage.getItem('id');
    const nombre=localStorage.getItem('nombre');
    const user={token:token,id:userId,nombre:nombre};
    setUsuarioLogeado(user);
    if(!token){
      navigate("/login");
    }

   
    
  }, [])
  



  
  
  

  return (

<>
<Menu></Menu>
<Outlet></Outlet>
</>

   
  
  )
}

export default Dashboard

