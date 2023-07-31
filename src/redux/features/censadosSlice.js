import { createSlice } from "@reduxjs/toolkit";

const initialState = [];//estado inicial lista vacia
const censadosSlice = createSlice({
 name: "censadosSlice",
 initialState,
 reducers: {
 reset: state => initialState,
  //devuelve estado inicial
cargaInicialCensados: (state,accion) => {
    
 const listaCensados=accion.payload;

 return listaCensados;
 },
 agregarCensado:(state,accion)  => {
   console.log('accion.payload', accion.payload)
 const censado=accion.payload;
 return [...state,censado]; 
 },
 borrarCensado:(state,accion) => {

    const id=accion.payload;
    const nuevaLista=state.filter(c=>c.id!=id);
    return nuevaLista; 

 },
 
 
    },
});

   export const {  cargaInicialCensados,agregarCensado, borrarCensado } = censadosSlice.actions;
   export default censadosSlice.reducer;