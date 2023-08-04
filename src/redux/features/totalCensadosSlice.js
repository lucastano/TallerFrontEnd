import { createSlice } from "@reduxjs/toolkit";

const initialState = [];//estado inicial lista vacia
const totalCensadosSlice = createSlice({
 name: "totalCensadosSlice",
 initialState,
 reducers: {
 reset: state => initialState,
  //devuelve estado inicial
cargaInicialTotalCensados: (state,accion) => {
    
 const totalCensados=accion.payload;

 return totalCensados;
 },
 aumentarTotalCensados: (state) => {
    
state=state+1;
  return state++; 
   
},

 
 
    },
});

   export const {  cargaInicialTotalCensados,aumentarTotalCensados } = totalCensadosSlice.actions;
   export default totalCensadosSlice.reducer;

   