// eslint-disable-next-line react/prop-types
export default function DetailOptions({ saveProduct }){ 
    return ( 
        <div className="item-btn-area">
        <button className="btn-detail-add-cart" onClick={saveProduct}>add</button>
        <button className="btn-detail-buy-it">buy it now</button>
        </div>
    )
}