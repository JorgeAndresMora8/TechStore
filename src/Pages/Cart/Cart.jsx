import { useContext } from "react"
import { CartContext } from "../../context/context"
import { CartList, NoProductMessage } from "./Components"

export default function Cart(){ 

    const { cartItems } = useContext(CartContext)

    return ( 
        <div className="cart-container">
            <div className='cart-info-area'>
                <b>Cart Details.</b>
                <p>In the cart, you'll find information about your selected products for an informed and satisfying purchase </p>
            </div>
             <div className="cart-product-list">

             { cartItems.length === 0 ? <NoProductMessage /> : <CartList cartItems={cartItems} />}

            </div> 
        </div>
    )
}