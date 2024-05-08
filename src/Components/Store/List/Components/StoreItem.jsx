import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function StoreItem({ product }) {
    
    return (<div className='container-item'>
        <div style={{width: '100%', height: 'auto', display: 'flex', justifyContent: 'start', alignItems: 'start', padding: '5px 10px'}}>
        {/* <span className="container-item-product-type">-20%</span> */}
        <img src="./EnvioAviso.png" style={{width: "50%"}}/>
        {/* { product.price <500 && <img src="./ofertaDia.png" style={{width: "80px"}}/>} */}
        </div>
        <div className='container-item-image'>
            <img src={product.image} style={{width: '60%'}} alt={product.name} />
        </div>
        <div className='container-item-text'>
            <b className='container-item-text-name'>{ product.name }</b>
            {/* <b className='container-item-text-name'>{ product.rating }</b> */}
            <span className='container-item-text-offer'>oferta relampago</span>
            <img src="/fourStar.png" style={{width:'40px'}}/>
            <b className='container-item-text-stock'>{ product.stock } units avaliable</b>
            <b className='container-item-text-price'>{ product.price }$</b>
        </div>
        <div style={{width: '100%', height: 'auto', display: 'flex', justifyContent: 'end', alignItems: 'end' , padding: '5px 10px'}}>
        <button className='container-item-text-btn'><Link to={`/store/${product.id}`} style={{color: '#fff', textDecoration: 'none'}}>buy now</Link></button>
        </div>
    </div>)
}