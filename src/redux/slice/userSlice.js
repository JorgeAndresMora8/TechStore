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
        loginUser: (state, action) => {
            const { token, email } = action.payload
            setAndPersistLocalStorage(LOCAL_STORAGE_KEY.auth_data, { email: email, token: token })

            return { token, email }

        }, 
        logoutUser: () => {
            setAndPersistLocalStorage(LOCAL_STORAGE_KEY.auth_data, initialState)
            return initialState
        }
    }
})

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer
