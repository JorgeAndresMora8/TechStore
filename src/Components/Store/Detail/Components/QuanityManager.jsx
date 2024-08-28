import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function ItemManager({ addItem, removeItem, saveProduct}){ 

    return ( 
        <>
        <div>
            <div className="button-item-manager-area" style={{display: "flex"}}>
            <button className="button-add" onClick={addItem}>+</button>
            <button className="button-remove" onClick={removeItem}>-</button>
            </div>
        </div>
        <button className="button-save" onClick={saveProduct}><FontAwesomeIcon icon={faCartArrowDown} /></button>
        </>
    )

}