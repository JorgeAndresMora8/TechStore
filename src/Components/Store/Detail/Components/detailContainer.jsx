import {
  faStore,
  faTruckRampBox
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CartContextProvider } from "../../../../context/context";
import { useAsync } from "../../../../hooks/asyncComponentCleanHook";
import useFetchAndLoads from "../../../../hooks/useFetchAndLoads";
import { getProductByCategory } from "../../../../Service/ProductService";
import StoreList from "../../List/Components/StoreList";
import FinishManager from "./FinishManager";
import ItemManager from "./QuanityManager";

/* eslint-disable react/prop-types */
export default function DetailContainer({ product }) {

  const [suggestedProduct, setSuggestedProduct] = useState([])

  const { loading, callEndpoint } = useFetchAndLoads()

  // get api data
  const getApiData = async () => await callEndpoint(getProductByCategory(product.category))

  //successAction
  const adaptData = (data) => { 
    console.log(data)
    setSuggestedProduct(data)
  }

  useAsync(getApiData, adaptData, () => {}, [])

  const [item, setItem] = useState(1);
  const [finish, setFinish] = useState(false);

  const { addToCart } = CartContextProvider()

  function saveProduct() {
    addToCart({ ...product, quantity: item });
    setFinish(true);
  }

  function addItem() {
setItem(item + 1);
  }

  function removeItem() {
    if (item > 2) setItem(item - 1);
    else setItem(1);
  }

  return (
    <div className="detail-container">
      <div className="detail-image-area">
        <img style={{ width: "70%" }} src={product.image} />
      </div>
      <div className="detail-text-area">
        <div className="detail-text-area-product-info">
          <b className="detail-text-name">{product.name}</b>
          <p className="detail-text-description">{product.description}</p>
          <div className="detail-text-price-area">
            <b className="price">{product.price}$</b>
            <p className="installments">pay in 3 installments of {parseInt(product.price / 3)}$</p>
            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px'}}>
              <img src="/americaexpress.jpg" style={{width: '40px', borderRadius: '0.3rem'}}/>
              <img src="/visaItem.png" style={{width: '40px', borderRadius: '0.3rem'}}/>
              <img src="/mastercard.png" style={{width: '40px', borderRadius: '0.3rem'}}/>
              <img src="/bankOfAmericaDetail.png" style={{width: '40px', borderRadius: '0.3rem'}}/>
            </div>
          </div>
        </div>
        <div className="item-manager-container">
          <div className="item-manager-area" style={{ display: "flex" }}>
            <b>{item}</b>
            {!finish && (
              <ItemManager
                saveProduct={saveProduct}
                item={item}
                addItem={addItem}
                removeItem={removeItem}
              />
            )}
          </div>
          {finish && <FinishManager />}
        </div>
        <div className="option-item-area">
          <ul>
            <li>
              Type: <span>{product.category}</span>
            </li>
            <li>
              Brand: <span>{product.brand}</span>
            </li>
          </ul>
        </div>
        <div className="general-info-container">
          <b className="general-info-title">General Information</b>
          <p className="general-info-text">
            All items are guaranteed 100% original, never opened, and come with
            a two-year guarantee.
          </p>
          <p className="general-info-text-item">
            <FontAwesomeIcon className="general-info-icon" icon={faTruckRampBox} />{" "}
            delivery in all Argentina!
          </p>
          <p className="general-info-text-item">
            <FontAwesomeIcon className="general-info-icon" icon={faStore} />{" "}
            Pick up in our store!
          </p>
        </div>
      </div>
      <div className="suggested-products-container">
        <div
          className="suggested-products-list-area"        >
          <b className="product-related-title">Products Related</b>
          <p className="product-related-text">
            Check out our vast products options related to {product.category}`s
          </p>
        </div>
        { loading ? <p>Loading</p> : <StoreList products={suggestedProduct} />}
      </div>
    </div>
  );
}
