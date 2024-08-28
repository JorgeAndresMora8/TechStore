import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../redux/slice/userSlice"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../../context/context";
import { useContext } from "react";
import { PublicRoutes } from '../Links/linkRoutes'



export default function NavbarOptions(){ 

    const dispatch = useDispatch()
    const nav = useNavigate()
    const authentication = useSelector(state => state.auth); 
   

    const { cartItems } = useContext(CartContext)

    function handleSubmit(){ 
        dispatch(logout())
        nav(PublicRoutes.LOGIN, {replace: true})
    }

    return ( 
        <>
        <li className="nav-link"><button className='btn-cart'><Link to={'/cart'}><FontAwesomeIcon icon={faUser}/>{cartItems.length}</Link></button></li>
        <li className="nav-link">{authentication.token ? <button className='btn-logout' onClick={handleSubmit}>Log out</button>: <Link to={'/login'}>login</Link>}</li>
        </>
    )
}