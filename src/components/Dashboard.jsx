import React from 'react'
import '../Estilos/MiEstilos.css'
import { useEffect,useState } from 'react';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import Menu from './Menu'
import Censados from './Censados'
import { Outlet } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { obtenerCensadosService,obtenerCiudades,obtenerDepartamentos,obtenerOcupaciones,obtenerTotalCensados } from '../Servicios/Services'
import { cargaInicialCensados} from '../redux/features/censadosSlice';
import { cargaInicialDepartamentos } from '../redux/features/departamentosSlice';
import { cargaInicialOcupaciones } from '../redux/features/ocupacionesSlice';
import { cargaInicialCiudades } from '../redux/features/ciudadesSlice';
import { cargaInicialTotalCensados } from '../redux/features/totalCensadosSlice';
import { Container, Row,Col } from 'react-bootstrap';





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
   const objCiudades=await obtenerCiudades(token,id);
    

    //destructuring
    const {ciudades}=objCiudades;
    const {personas}=censados;
    const {departamentos}=objDepartamentos;
    const {ocupaciones}=objOcupaciones;
    const{total}=objTotalCensados;

    dispatch(cargaInicialOcupaciones(ocupaciones));
    dispatch(cargaInicialDepartamentos(departamentos));
    dispatch(cargaInicialCensados(personas));
    dispatch(cargaInicialCiudades(ciudades));
    dispatch(cargaInicialTotalCensados(total));
  }



  return (

<>
<Menu></Menu>

<Outlet></Outlet>

</>

   
  
  )
}

export default Dashboard

