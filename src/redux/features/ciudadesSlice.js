import { createSlice } from "@reduxjs/toolkit";
const initialState = [];//estado inicial lista vacia
const ciudadesSlice = createSlice({
 name: "ciudadesSlice",
 initialState,
 reducers: {
 reset: state => initialState,
  //devuelve estado inicial
 cargaInicialCiudades: (state,accion) => {
    console.log('en redux',accion.payload);
 const listaCiudades=accion.payload;
 
 return listaCiudades;
 },
 
    },
});

   export const {cargaInicialCiudades} = ciudadesSlice.actions;
   export default ciudadesSlice.reducer;