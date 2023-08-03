import { createSlice } from "@reduxjs/toolkit";
const initialState = false;
const spinnerSlice = createSlice({
    name: "spinner Slice",
    initialState,
    reducers: {

        modificarSpinner: (state, action) => {
            const activo = action.payload;
            return activo;
        }

    },
});
export const { modificarSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;