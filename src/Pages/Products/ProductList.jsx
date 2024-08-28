import { useEffect, useState } from "react"
import { ProductItem } from "./Components"


export const ProductList = () => { 

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchProducts = async () => { 
        const response = await fetchProducts()
        const data = await response.json()
        setProducts(data)
        setLoading(false)
    }

    useEffect(() => { 
        fetchProducts()  // Call the function to fetch products when the component mounts
    }, [])

    return ( 
        <div>
            { loading ? <p>Loading...</p> : products.map((product) => <ProductItem product={product}/> ) }
        </div>
    )

}