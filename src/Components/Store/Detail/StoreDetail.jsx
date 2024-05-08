import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailContainer from "./Components/detailContainer";
import LoadingPage from "../../../Loading/LoadingPage";
import { ProductId } from "../../../Service/ProductService";

export default function StoreDetail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const fetchProduct = async () => {
    const { data } = await ProductId(id);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return loading ? <LoadingPage /> : <DetailContainer product={product} />;
}
