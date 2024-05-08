import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { StoreFetch } from "../../../hooks/FetchProducts"
import Spinner from "../../../Loading/Spinner"
import StoreList from "../List/Components/StoreList"

export default function Category(){ 

    const { category } = useParams()
    const { products, loading } = StoreFetch(`http://localhost:8080/products/category/${category}`)
    return ( 
        <div>
            <b>Category {category}</b>
            { loading && <Spinner /> }
            {!loading && <StoreList products={products}/>}
        </div>
    )
}