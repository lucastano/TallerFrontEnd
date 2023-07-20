import React from 'react'
import Login from '../components/Login'
import { useState,useEffect } from 'react'
import {inicio} from "../Servicios/services"



function Usuario() {

  const [usuarioLogeado, setUsuarioLogeado] = useState({})
  const [token, setToken] = useState("")
  useEffect(() => {
    
    if(usuarioLogeado){
      localStorage.setItem("token",token);
    }
  
    
  }, [usuarioLogeado])
  

  const inicioUsuario=(nombre,password)=>{
   
    let user={
      usuario:nombre, 
      password:password
    }
    
    loginCall(user);
    
  }
  const loginCall= async (object) => {
  
    const log=await inicio(object);
    console.log(log);// me da el codigo que me retorno la fetch
    if(log.codigo==200){
      setUsuarioLogeado(object);
      setToken(log.apiKey);
    }

  }

 

  
  return (
    <Login inicioSesion={inicioUsuario}></Login>
  )
}

export default Usuario