import { useState } from "react";
import Spinner from "../../../Loading/Spinner";
import { getProductList } from "../../../Service/ProductService";
import { useAsync } from "../../../hooks/asyncComponentCleanHook";
import useFetchAndLoads from "../../../hooks/useFetchAndLoads";
import Carousel from "../../Carousel/Carousel";
import CategoryBanner from "./Components/CategoryBanner";
import StoreList from "./Components/StoreList";
import SearchBar from "./Components/searchBar";

export default function Store() {


  const [count, setCount] = useState(1)

  function handleCountChange(){ 
    setCount(count + 1)
  }

  // //Custom Hook for fetching data.
  const { loading, callEndpoint } = useFetchAndLoads()
  const [products, setProducts] = useState([])

  const getApiData = async () => {
   return await callEndpoint(getProductList(""))
  }

  //To adapt the response from the api to the state in a correct form.
  const adaptResponse = (data) => { 
    setProducts(data)
  }

  // making actions of the functions.
  useAsync(getApiData, adaptResponse, () => {}, [])


  // Aqui se hace la llamada a la api
  const handleSearch = async (data) => { 
    const Params = Object.keys(data).map((key) => (`${key}=${data[key]}`)).join('&')
    
    return await callEndpoint(getProductList(Params))
  }

  return (
    <>
      <Carousel images={["beatsBanner.png", "hpBanner.png"]} />
      <button onClick={handleCountChange}>click</button>
      <p>{count}</p>
      <CategoryBanner />
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


 //Tengo que adaptar el custom hook para que acepte parametros para 
  //agregarlos a la url

  //Pero no tengo que modificar el custom hook, tengo que modificar 
  //es la funcion que hace la llamada. osea el getProductList()
  //Porque es el responsable de realizar la llamada, la data es indistinta.






  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // async function handleSearch({ searchName, brand, price, category }) {
  //     try{
  //       const { data } = await FetchProducts({
  //            searchName,
  //            brand,
  //            price,
  //            category,
  //          });;
  //       setProducts(data);
  //       }catch(error){ 
  //         setProducts([])
  //       }
  // }

  // const fetchData = async () => {
    
  //   try{
  //   const { data } = await ProductList();
  //   setProducts(data);
  //   setLoading(false);
  //   }catch(error){ 
  //     setProducts([])
  //     setLoading(false)
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   window.scrollTo(0, 0);
  // }, []);