import { BACKEND_URL } from "../../../Service/Config/URL"


export const getProducts = () => { 
    return fetch(BACKEND_URL + '/store')
}