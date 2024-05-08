import axios from "axios"

export const ProductList = () => { 
    return axios.get('https://techstorebackend-1sdx.onrender.com/store')
}

export const FetchProducts = async ({ searchName, brand, price, category }) => { 
    return axios.get(`https://techstorebackend-1sdx.onrender.com/store/search?name=${searchName}&brand=${brand}&price=${price}&category=${category}`)
    .catch((error) => console.log(error.response))

    // try {
    //     const response = await axios.get(`http://localhost:8080/store/search?name=${searchName}&brand=${brand}&price=${price}&category=${category}`);
    //     return response.data
    //   } catch (error) {
    //     return []
    //   }
}

export const ProductId = (id) => { 
    return axios.get(`https://techstorebackend-1sdx.onrender.com/store/${id}`)
}
