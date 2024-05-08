import StoreList from "./Components/StoreList";
import SearchBar from "./Components/searchBar";
import Spinner from "../../../Loading/Spinner";
import { useEffect, useState } from "react";
import Carousel from "../../Carousel/Carousel";
import { ProductList, FetchProducts } from "../../../Service/ProductService";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handleSearch({ searchName, brand, price, category }) {
      // const { data } = await FetchProducts({
      //   searchName,
      //   brand,
      //   price,
      //   category,
      // });
      // setProducts(data);

      try{
        const { data } = await FetchProducts({
             searchName,
             brand,
             price,
             category,
           });;
        setProducts(data);
        }catch(error){ 
          setProducts([])
        }
  }

  const fetchData = async () => {
    
    try{
    const { data } = await ProductList();
    setProducts(data);
    setLoading(false);
    }catch(error){ 
      setProducts([])
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Carousel images={["beatsBanner.png", "hpBanner.png"]} />
      <div className="boxContainer">
        {loading && <Spinner />}
        {!loading && (
          <>
            <SearchBar handleSearch={handleSearch} />
            <StoreList products={products} />
          </>
        )}
      </div>
    </>
  );
}

// /* eslint-disable no-unused-vars */
// fetch("http://localhost:8080/store/", { headers: { 'token': '12' } })
//   .then((resp) => resp.json())
//   .then((resp) => setProducts(resp))
//   .then((resp) => {
//     setLoading(false)});

// const products = await getProducts()
// setProducts(products)
// setLoading(false)
