import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => { 
    
    const authentication = useSelector(state => state.auth); 
    return authentication.token ? <Outlet /> : <Navigate replace to='/login'/>
}