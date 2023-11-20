import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', JSON.stringify(action.payload));
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export default userSlice.reducer;
export const { setToken,setUser } = userSlice.actions;