import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAPI } from "./api/userapi";
import userSlice from "./slice/userSlice";




const store = configureStore({
    reducer: {
        user: userSlice,
        [userAPI.reducerPath]: userAPI.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware)
})


export default store;
export * from "./slice/userSlice.js"
