import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PrivateRoutes(){ 
    return ( 
        <>
        <li className="nav-link"><Link className="navbar-link" to={'/'}>about us</Link></li>
        <li className="nav-link"><Link className="navbar-link" to={'/store'}>store</Link></li>
        <li className="nav-link"><Link className="navbar-link" to={'/contact'}>contact</Link></li>
        
        </>
    )
}