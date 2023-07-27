import React, { useEffect } from 'react'
import { useNavigate, NavLink, Navigate } from "react-router-dom";

function Logout() {
useEffect(() => {
 navigate("/login")
})



  const navigate = useNavigate();

  
  
  localStorage.clear();

  return (
    <>
    <h1>cerro sesion</h1>
    </>
  )
}

export default Logout