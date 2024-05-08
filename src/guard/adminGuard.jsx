import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../Components/Navbar/Links/linkRoutes";

export const AuthGuard = () => { 
    
    const auth = useSelector(state => state.auth); 
    return auth.admin ? <Outlet /> : <Navigate replace to={PrivateRoutes.HOME}/>
}