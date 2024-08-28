import StoreItem from "./StoreItem";
import NoProductFound from "./noProductFound";

// eslint-disable-next-line react/prop-types
export default function StoreList({ products }){ 
    return ( 
        
        <div style={{width:'95%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap', padding: '2rem 0px', borderRadius: '1rem', backgroundColor: "#EEF7FF", margin: '1rem 0px', boxShadow: "rgb(0 50 255 / 30%) 1px 2px 2px", backgroundImage: "url(/backgroundProducts.png)", backgroundSize: "cover"}}>
            { products.length <= 0 && <NoProductFound /> }
            {/*  eslint-disable-next-line react/prop-types */ }
            { products.length >= 1 && products.map((product) => <StoreItem key={product.id} product={product}/>) }
        </div>
    )
}