import StoreItem from "./StoreItem";
import NoProductFound from "./noProductFound";

// eslint-disable-next-line react/prop-types
export default function StoreList({ products }){ 
    return ( 
        
        <div style={{width:'80%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap', padding: '2rem 0px'}}>
            { products.length <= 0 && <NoProductFound /> }
            {/*  eslint-disable-next-line react/prop-types */ }
            { products.length >= 1 && products.map((product) => <StoreItem key={product.id} product={product}/>) }
        </div>
    )
}