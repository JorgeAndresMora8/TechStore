import { useContext } from "react"
import { CartContext } from "../../../context/context"
import { useNavigate } from "react-router-dom";

export default function CartDetail({ product }){ 

    const { removeFromCart, addToCart, removeOneFromCart } = useContext(CartContext)

    const nav = useNavigate()


    return ( 
        <div className="cart-product-list-info">
                    <div className="cart-product-list-item">
                        <img src={product.image} className="cart-product-list-image-area"/>
                        <div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column"}}>
                        <b className="cart-product-list-item-name">{ product.name }</b>
                        <b className="cart-product-list-item-delete" onClick={() => removeOneFromCart(product.id)}>eliminar</b>
                        </div>
                        <b className="cart-product-list-item-price">{product.price}$</b>
                        <div className="cart-product-list-item-btn-area">
                            <button onClick={() => addToCart({...product, quantity: 1})} className="cart-product-list-item-add-btn">+</button>
                            <b className="cart-product-list-item-total">{product.quantity}</b>
                            <button onClick={() => removeFromCart(product)} className="cart-product-list-item-remove-btn">-</button>
                        </div>
                        {/* <button className='btn-remove' onClick={() => removeOneFromCart(product.id)}><FontAwesomeIcon icon={faTrashCan} /></button> */}
                    </div>
                </div>
    )
}