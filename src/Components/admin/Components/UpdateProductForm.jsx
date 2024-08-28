import React, { useState } from 'react';
import Input from './Input';

const UpdateProductForm = ({ product }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    category: product.category,
    brand: product.brand,
    image: product.image,
    rating: product.rating
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const resp = await onSubmit(formData);
    // console.log(resp)

    // if(resp.status !== 200){ 
    //   alert("There was an error");
    //   console.log(resp.message)
    // }else{ 
    //   alert("Product added successfully!");
    //   setFormData({
    //     name: "",
    //     description: "",
    //     price: 0,
    //     stock: 0,
    //     category: "",
    //     brand: "",
    //     image: "",
    //     rating: 0
    //   });
    // }
  };

  return (
    <form style={{width: "100%"}}  onSubmit={handleSubmit}>
      <Input 
        label="Name" 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <Input 
      textArea={true}
        label="Description" 
        type="text" 
        name="description" 
        value={formData.description} 
        onChange={handleChange} 
      />
      <Input 
        label="Price" 
        type="number" 
        name="price" 
        value={formData.price} 
        onChange={handleChange} 
      />
      <Input 
        label="Product Stock" 
        type="number" 
        name="stock" 
        value={formData.stock} 
        onChange={handleChange} 
      />
      <Input 
        label="Category" 
        type="text" 
        name="category" 
        value={formData.category} 
        onChange={handleChange} 
      />
      <Input 
        label="Brand" 
        type="text" 
        name="brand" 
        value={formData.brand} 
        onChange={handleChange} 
      />
      <Input 
        label="Image" 
        type="text" 
        name="image" 
        value={formData.image} 
        onChange={handleChange} 
      />
      <Input 
        label="Rating" 
        type="text" 
        name="rating" 
        value={formData.rating} 
        onChange={handleChange} 
      />
      
      <button className='btnSubmitAdminPage' type="submit">Submit</button>
    </form>
  );
};

export default UpdateProductForm;
