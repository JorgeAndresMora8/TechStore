import { useDispatch } from "react-redux"
import { logout } from "../../../redux/slice/userSlice"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../../context/context";
import { useContext } from "react";
import { PublicRoutes } from '../Links/linkRoutes'



export default function NavbarOptions(){ 

    const dispatch = useDispatch()
    const nav = useNavigate()

    const { cartItems } = useContext(CartContext)

    function handleSubmit(){ 
        dispatch(logout())
        nav(PublicRoutes.LOGIN, {replace: true})
    }

    return ( 
        <div style={{width: "auto", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
        <button className='btn-cart'><Link to={'/cart'}><FontAwesomeIcon icon={faCartShopping} /> {cartItems.length}</Link></button>
        <button className='btn-logout' onClick={handleSubmit}><FontAwesomeIcon icon={faRightFromBracket} />  Log out</button>
        </div>
    )
}