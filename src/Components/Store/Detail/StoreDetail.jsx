import { useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../Loading/LoadingPage";
import { ProductId } from "../../../Service/ProductService";
import { useAsync } from "../../../hooks/asyncComponentCleanHook";
import useFetchAndLoads from "../../../hooks/useFetchAndLoads";
import DetailContainer from "./Components/detailContainer";

export default function StoreDetail() {
  const [product, setProduct] = useState({});

  let { id } = useParams();
  const { loading, callEndpoint } = useFetchAndLoads()

  const getApiData = async () => await callEndpoint(ProductId(id))

  const adaptData = (data) => setProduct(data)

  useAsync(getApiData, adaptData, () => { }, [] )

  return loading ? <LoadingPage /> : <DetailContainer product={product} />;
}
