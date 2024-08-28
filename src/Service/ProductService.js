import axios from "axios";
import { BACKEND_URL } from "./Config/URL";
import { getAbortController } from "../utilities/abortController";

export const getProductList = (params) => {

  console.log(params)
  //Tengo que validar si hay parametros o no
  let URL = params.length <= 0 ? "http://localhost:8080/store" : `http://localhost:8080/store/search?${params}`
  
  const controller = getAbortController();
  return {
    call: fetch(URL, { signal: controller.signal }),
    controller,
  };
};

export const getProductByCategory = (productCategory) => {
  const controller = getAbortController();
  return {
    call: fetch(
    //   `https://localhost:8080/store/search?name=&brand=&price=0&category=${productCategory}`,
    `https://techstorebackend-1sdx.onrender.com/store/search?name=&brand=&price=0&category=${productCategory}`, 
      { signal: controller.signal }
    ),
    controller,
  };
};

export const ProductList = () => {
  return axios.get(BACKEND_URL + "/store");
};

export const FetchProducts = async ({ searchName, brand, price, category }) => {
  return axios
    .get(
      BACKEND_URL +
        `/store/search?name=${searchName}&brand=${brand}&price=${price}&category=${category}`
    )
    .catch((error) => console.log(error.response));
};

export const ProductId = (id) => {
  const controller = getAbortController();

  // return axios.get(BACKEND_URL + `/store/${id}`)
  return {
    call: fetch(`http://localhost:8080/store/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const createProduct = async (data) => {
  return await fetch("http://localhost:8080/store", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
