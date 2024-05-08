import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/userSlice"

export const store = configureStore({ 
    reducer: {
        auth: authSlice
    }
})