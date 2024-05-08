import { useEffect, useState } from "react"
import FinishManager from "./FinishManager"
import ItemManager from "./QuanityManager"
import { useContext } from "react"
import { CartContext } from "../../../../context/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faHouse, faTruck, faUserLarge } from "@fortawesome/free-solid-svg-icons"
import StoreList from "../../List/Components/StoreList"
import ProductBrandImage from "./productBrandImage"
import ReviewList from "../../../Review/ReviewList"

/* eslint-disable react/prop-types */
export default function DetailContainer({ product }){ 

    const [item, setItem] = useState(1)
    const [finish, setFinish] = useState(false)
    // const [productCategory, setProduct] = useState([])
    // const [loading, setLoading] = useState(true)

    const { addToCart } = useContext(CartContext)

    function saveProduct(){
        addToCart({...product, quantity: item})
        setFinish(true)
    }

    function addItem(){ 
        setItem(item + 1)
    }

    function removeItem(){ 
        if(item > 2) setItem(item - 1)
        else setItem(1)
    }

    // useEffect(() => { 
    //     fetch(`http://localhost:8080/store/search?brand=${product.brand}`)
    //     .then((resp) => resp.json())
    //     .then((resp) => { 
    //         setProduct(resp)
    //         setLoading(false)
    //     })
    // }, [])

    return ( 
        <div className='detail-container'>
            <div className="detail-image-area">
                <img style={{width: '70%'}} src={product.image}/>
            </div>
            <div className="detail-text-area">
                <div className="detail-text-area-product-info">
                <ProductBrandImage brand={product.brand}/>
                     <b className="detail-text-name">{product.name}</b>
                    <p className="detail-text-description">{product.description}</p> 
                     <div className="detail-text-price-area">
                        <b className="price">{product.price}$</b>
                        <p className="installments">pay in 3 installments of 9900$</p>
                    </div>
                </div>
               <div className="item-manager-container">
                        <div className="item-manager-area">
                            <b>{item}</b>
                            { !finish && <ItemManager saveProduct={saveProduct} item={item} addItem={addItem} removeItem={removeItem}/>}
                            
                    </div>
                    {finish && <FinishManager />}
                </div>
                <div className="option-item-area">
                    <ul>
                        <li>Type: <span>{product.category}</span></li>
                        <li>Brand: <span>{product.brand}</span></li>
                        <li>Storage: <span>20GB</span></li>
                        <li>Year: <span>2023</span></li>
                    </ul>
                </div>
                <div className="general-info-container">
                    <b className="general-info-title">General Information</b>
                    <p className="general-info-text">All items are guaranteed 100% original, never opened, and come with a two-year guarantee.
                    </p>
                    <p className="general-info-text-item"><FontAwesomeIcon className="general-info-icon" icon={faTruck} />  Hacemos envios a toda argentina</p>
                    <p className="general-info-text-item"><FontAwesomeIcon className="general-info-icon" icon={faHouse} />  Hacemos envios a toda argentina</p>
                </div> 
            </div>
            <div className="detail-other-product-container">
                {/* { !loading && <StoreList products={productCategory}/>} */}
            </div>
            {/* <ReviewList />  */}
        </div>
    )
}