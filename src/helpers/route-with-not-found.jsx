import { Route, Routes } from "react-router-dom";

export default function RoutesWithNotFound({ children }){ 
    return ( 
        <Routes>
        {children}
        <Route path="*" element={<>This page doesnt exits</>}/>
        </Routes>
    )
}