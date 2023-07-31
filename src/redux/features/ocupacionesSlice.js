import { createSlice } from "@reduxjs/toolkit";
const initialState = [];//estado inicial lista vacia
const ocupacionesSlice = createSlice({
 name: "ocupacionesSlice",
 initialState,
 reducers: {
 reset: state => initialState,
  //devuelve estado inicial
 cargaInicialOcupaciones: (state,accion) => {
    
 const listaOcupaciones=accion.payload;
 
 return listaOcupaciones;
 },
 
    },
});

   export const {cargaInicialOcupaciones} = ocupacionesSlice.actions;
   export default ocupacionesSlice.reducer;