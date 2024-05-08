import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NoProductFound(){ 
    return ( 
        <div className="noProductFoundContainer">
            <FontAwesomeIcon className="no-product-found-icon" icon={faMagnifyingGlass} />
            <b>No Products Were Found</b>
            <p>You can search others products at the store</p>
        </div>
    )
}