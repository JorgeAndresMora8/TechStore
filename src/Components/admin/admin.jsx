import { createProduct } from "../../Service/ProductService";
import Form from "./Components/Form";
import DataGridDemo from "./Components/ProductTable";
import { UpdateProduct } from "./Components/UpdateProduct";

export default function Admin(){ 

    async function HandleSubmit(data){

    const resp = await createProduct(data)
    const respData = await resp.json();
    
    return respData;

    }

    return ( 
        <div className="adminFormContainer">
            <h1>Admin Dashboard</h1>
        <div className="adminFormArea">
          <b>Create A New Product</b>
          <p>Please add the required info correctly to add the product succesfully...</p>
          <Form onSubmit={HandleSubmit} />
        </div>
        <div className="admin-product-list">
        <h2>Products</h2>
        <p>Here you can manage all your products</p>
          <DataGridDemo />
        </div>
        <div className="admin-update-product">
            <UpdateProduct />
        </div>
        </div>
    )
}