import { configureStore } from '@reduxjs/toolkit'
import censadosSlice from './features/censadosSlice'
import departamentosSlice from './features/departamentosSlice'
import ciudadesSlice from './features/ciudadesSlice'
import ocupacionesSlice from './features/ocupacionesSlice'

export const store = configureStore({
 reducer: {
 listaCensados: censadosSlice ,//se crea un alias el cual sera el que identifique a este reducer en el store ( pueden haber otros reducer)
 listaDepartamentos:departamentosSlice,
 listaCiudades:ciudadesSlice,
 listaOcupaciones:ocupacionesSlice
 },
})
