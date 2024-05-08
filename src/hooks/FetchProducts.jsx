import { useState, useEffect } from "react";

export function StoreFetch(url) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      /* eslint-disable no-unused-vars */
      fetch(url, { headers: { 'token': '12' } })
        .then((resp) => resp.json())
        .then((resp) => setProducts(resp))
        .then((resp) => { 
          setLoading(false)});
    }, []);
  
    return { products, loading, setLoading };
  }