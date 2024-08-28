import React, { useState } from 'react';
import Input from './Input';

const emptyState = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  category: "",
  brand: "",
  image: "",
  rating: 0
}

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState(emptyState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    //Almaceno los datos de los inputs.
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await onSubmit(formData);

    
    if(!resp.error){ 
      alert("Product added successfully!");
      setFormData(emptyState);
    }else{ 
      alert("There was an error. please check the required info...");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width: "25rem"}}>
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
      
      <span style={{fontSize: "0.7rem", color: "darkgray"}}><span style={{color: "#FFAAAA"}}>*</span> required info...</span>
      <button className='btnSubmitAdminPage' type="submit">Submit</button>
    </form>
  );
};

export default Form;
