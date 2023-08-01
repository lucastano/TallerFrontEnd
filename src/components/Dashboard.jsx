import React from 'react'
import '../Estilos/MiEstilos.css'
import { useEffect,useState } from 'react';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { obtenerCensadosService,obtenerCiudades,obtenerDepartamentos,obtenerOcupaciones,obtenerTotalCensados } from '../Servicios/Services'
import { cargaInicialCensados} from '../redux/features/censadosSlice';
import { cargaInicialDepartamentos } from '../redux/features/departamentosSlice';
import { cargaInicialOcupaciones } from '../redux/features/ocupacionesSlice';
import { cargaInicialCiudades } from '../redux/features/ciudadesSlice';





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
      obtenerDatos(token,userId);
      
      
    }

  }, [])

 
  
  const obtenerDatos=async(token,id)=>{
    //obtengo los fetch
    const censados=await obtenerCensadosService(token,id);
    const objDepartamentos=await obtenerDepartamentos(token,id);
    const objOcupaciones=await obtenerOcupaciones(token,id);
    //es el total de censados en el sistema(no de cada usuario);
    const objTotalCensados=await obtenerTotalCensados(token,id);
   
    

    //destructuring
    const {personas}=censados;
    const {departamentos}=objDepartamentos;
    const {ocupaciones}=objOcupaciones;
    

    //obtengo todas las ciudades de todos los departamentos
    
    const obtenerCiudadesPromises = departamentos.map((d) => {
      return obtenerCiudades(token, id, d.id);
    });
  
    const ciudadesObj = await Promise.all(obtenerCiudadesPromises);
   
    const [,  ...lista] = ciudadesObj.map((obj) => obj.ciudades);
    const todasLasCiudades = lista.flatMap((obj) => obj);

    dispatch(cargaInicialOcupaciones(ocupaciones));
    dispatch(cargaInicialDepartamentos(departamentos));
    dispatch(cargaInicialCensados(personas));
    dispatch(cargaInicialCiudades(todasLasCiudades));
    

    

  }

  

  // const obtenerCensados=async(token,id)=>{
 
  //   const censados=await obtenerCensadosService(token,id);
  //   const {personas}=censados;
    
  //   dispatch(cargaInicialCensados(personas));
   
  // }

  // const departamentos=async(token,id)=>{
  //   const retorno=await obtenerDepartamentos(token,id);
  //   const {departamentos}=retorno;
  //   dispatch(cargaInicialDepartamentos(departamentos));
    
  // }
  // const ocupaciones=async(token,id)=>{
  //   const retorno=await obtenerOcupaciones(token,id);
  //   const {ocupaciones}=retorno;
  //   dispatch(cargaInicialOcupaciones(ocupaciones));
  // }
  



  
  
  

  return (

<>
<Menu></Menu>
<Outlet></Outlet>
</>

   
  
  )
}

export default Dashboard

