import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PrivateRoutes(){ 
    return ( 
        <>
        <li className="nav-link"><Link className="navbar-link" to={'/store'}>store</Link></li>
        <li className="nav-link"><Link className="navbar-link" to={'/cart'}>cart</Link></li>
        <li className="nav-link"><Link className="navbar-link" to={'/home'}>home</Link></li>
        </>
    )
}