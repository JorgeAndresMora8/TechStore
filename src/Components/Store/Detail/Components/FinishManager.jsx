import { faCarAlt, faCartShopping, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function FinishManager(){ 
    return ( 
        <div className="item-btn-area">
        <button className="btn-detail-add-cart"><Link to='/cart'><FontAwesomeIcon icon={faCartShopping} /></Link></button>
        <button className="btn-detail-buy-it"><Link to='/store'><FontAwesomeIcon icon={faStore} /></Link></button>
        </div>
    )
}