import { BACKEND_URL } from "../../../Service/Config/URL"


export const FetchProductDetail = (id) => { 
    return fetch(BACKEND_URL + `/store/${id}` )
}