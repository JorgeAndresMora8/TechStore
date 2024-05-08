import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AuthRoutes(){ 
    return ( 
        <>
            <li className="nav-link"><Link className="navbar-link" to={'/login'}>login</Link></li>
            <li className="nav-link"><Link className="navbar-link" to={'/signup'}>signup</Link></li>
        </>
    )
}