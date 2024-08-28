import { useState } from "react";

export const SearchProductIdForm = ({ SearchProduct }) => {
  const [productId, setProductId] = useState("");

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SearchProduct(productId);
  };

  return (
    <form onSubmit={handleSubmit} className="update-product-id-form">
      <label htmlFor="">Please enter the product id</label>
      <input onChange={handleChange} type="text" placeholder="*** product id ***" />
      <div style={{width: "100%", display: "flex", justifyContent: "right", alignItems: "right"}}>
      <button className="update-product-id-form-btn" type="submit">Buscar</button>
      </div>
      
    </form>
  );
};
