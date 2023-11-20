import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerError: null,

}

const errorSlice = createSlice({
    name: "errorSlice",
    initialState,
    reducers: {
        setRegisterError: (state, action) => {
            state.registerError = action.payload;
        }
    }

})

export const { } = errorSlice.actions
export default errorSlice.reducer