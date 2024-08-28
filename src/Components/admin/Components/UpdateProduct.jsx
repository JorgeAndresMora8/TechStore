// import { useState } from "react";
// // import { ProductId } from "../../../Service/ProductService";
// import { SearchProductIdForm } from "./SearchProductIdForm";
// import UpdateProductForm from "./UpdateProductForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faX } from "@fortawesome/free-solid-svg-icons";

// const ErrorMessage = () => {
//   return <div className="errorMessageContainer">
//     <FontAwesomeIcon style={{color: '#fff'}} icon={faX} />
//     <b>Product not found</b>
//     <p>Please search for a valid product ID</p>
//   </div>;
// };

// const fetchProduct = async (productId) => {
//   try {
//     const { data } = await ProductId(productId);
//     return data;
//   } catch (error) {
//     return false;
//   }
// };

export const UpdateProduct = () => {
  // const [productExits, setProductExits] = useState(false);

  // const SearchProduct = async (productId) => {
  //   setProductExits(false);
  //   const resp = await fetchProduct(productId);
  //   setProductExits(resp);
  // };

  return (
    <div className="update-product-form-area">
      <h3>Update Product</h3>
      {/* {<SearchProductIdForm SearchProduct={SearchProduct} />}

      {productExits ? (
        <UpdateProductForm product={productExits} />
      ) : (
        <ErrorMessage />
      )} */}
    </div>
  );
};
