import { createSlice } from "@reduxjs/toolkit";
const initialState = [];//estado inicial lista vacia
const departamentosSlice = createSlice({
 name: "departamentosSlice",
 initialState,
 reducers: {
 reset: state => initialState,
  //devuelve estado inicial
 cargaInicialDepartamentos: (state,accion) => {

 const listaDepartamentos=accion.payload;
 
 return listaDepartamentos;
 },
 
    },
});

   export const {cargaInicialDepartamentos} = departamentosSlice.actions;
   export default departamentosSlice.reducer;