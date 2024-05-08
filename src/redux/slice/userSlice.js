import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, setAndPersistLocalStorage } from "../../helpers/LocalStorageActions";
import { LOCAL_STORAGE_KEY } from "../../helpers/LocalStorageKey";


const initialState = { 
    email: '', 
    token: ''
}

export const authSlice = createSlice({ 
    name: "authentication", 
    initialState: getFromLocalStorage(LOCAL_STORAGE_KEY.auth_data) 
    ? getFromLocalStorage(LOCAL_STORAGE_KEY.auth_data) : 
    initialState, 

    reducers: { 
        login: (state, action) => {
            const { token, email } = action.payload
            state.token = token
            state.email = email

            setAndPersistLocalStorage(LOCAL_STORAGE_KEY.auth_data, { email: email, token: token })

        }, 
        logout: (state) => {
            setAndPersistLocalStorage(LOCAL_STORAGE_KEY.auth_data, initialState)
            state.token = ''
            state.email = ''
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer
