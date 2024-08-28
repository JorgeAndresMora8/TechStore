import { Link } from "react-router-dom"
import CartDetail from "./CartDetail"
import { useContext } from "react"
import { CartContext } from "../../../context/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentDollar, faStore } from "@fortawesome/free-solid-svg-icons"

export default function CartList({ cartItems }){ 

    const { getCartTotal } = useContext(CartContext)

    return ( 
        <>
        { cartItems.map((product => <CartDetail key={product.id} product={product}/>)) }
                <div className="cart-total-info-area">
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <b className="subtotal">subtotal</b> 
                    <b className="total">Total</b>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <b className="subtotal-quanity">{getCartTotal()}$</b>
                    <b className="total-quanity">{getCartTotal()}$</b>
                        </div>
                    
                </div>
                <div className="cart-btn-options">
                <Link className="btn-go-pay-nav" to={'/payment'}><FontAwesomeIcon icon={faCommentDollar} /> Buy </Link> 
                <Link className="btn-go-store-nav" to={'/store'}><FontAwesomeIcon icon={faStore} /> Shopping</Link> 
                </div>
        </>
    )
}