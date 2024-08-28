import { useEffect, useState } from "react"
import { FetchProductDetail } from "./Service/ProductDetail.service"
import { DetailContainer } from "./Components"



export const ProductDetail = (productId) => { 

    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ] = useState(true)

    const fetchProduct = async () => { 
        const response = await FetchProductDetail(productId)
        const data = await response.json()

        setProduct(data)
        setLoading(false)
    }

    useEffect(() => { 
        fetchProduct()
    }, [])

    return ( 
        <>
        { loading ? <p>Loading...</p> : <DetailContainer product={product}/> }
        </>
     )


    
    

}