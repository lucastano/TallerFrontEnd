import React from 'react'
import '../Estilos/MiEstilos.css'
import { useEffect,useState } from 'react';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { obtenerCensadosService,obtenerDepartamentos,obtenerOcupaciones } from '../Servicios/Services'
import { cargaInicialCensados} from '../redux/features/censadosSlice';
import { cargaInicialDepartamentos } from '../redux/features/departamentosSlice';
import { cargaInicialOcupaciones } from '../redux/features/ocupacionesSlice';



function Dashboard() {
const [usuarioLogeado, setUsuarioLogeado] = useState(undefined);
const navigate = useNavigate();
const dispatch=useDispatch();

  useEffect(() => {

    const token=localStorage.getItem('apiKey');
    const userId=localStorage.getItem('id');
    const nombre=localStorage.getItem('nombre');
    const user={apiKey:token,id:userId,nombre:nombre};
    setUsuarioLogeado(user);
    if(!token){
      navigate("/login");
    }
    else{
      obtenerCensados(token,userId);
      departamentos(token,userId);
      ocupaciones(token,userId);
    }

  }, [])
  
  const obtenerCensados=async(token,id)=>{
 
    const censados=await obtenerCensadosService(token,id);
    const {personas}=censados;
    
    dispatch(cargaInicialCensados(personas));
   
  }

  const departamentos=async(token,id)=>{
    const retorno=await obtenerDepartamentos(token,id);
    const {departamentos}=retorno;
    dispatch(cargaInicialDepartamentos(departamentos));
  }
  const ocupaciones=async(token,id)=>{
    const retorno=await obtenerOcupaciones(token,id);
    console.log("ocupaciones",retorno);
    const {ocupaciones}=retorno;
    dispatch(cargaInicialOcupaciones(ocupaciones));
  }
  



  
  
  

  return (

<>
<Menu></Menu>
<Outlet></Outlet>
</>

   
  
  )
}

export default Dashboard

