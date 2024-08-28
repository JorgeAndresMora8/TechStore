import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Checkbox } from '@mui/material';
import { ProductList } from '../../../Service/ProductService';

export default function DataGridDemo() {

  const columns = [
    {
        field: "",
        headerName: "Delete",
        type: "actions",
        sortable: false,
        width: 150,
        renderCell: (params) => (
          <>
            {" "}
            {
              <Checkbox
                size="small"
                checked={findProduct(params.row)}
                onChange={() => handleChange(params.row)}
              />
            }{" "}
          </>
        ),
      },
  { field: 'id', headerName: 'ID', width: 350 },
  {
    field: 'name',
    headerName: 'Product Name',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 110,
    editable: true,
  },
];

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [selectedProduct, setSelectedProduct] = useState([]);



    const findProduct = (product) =>
      !!selectedProduct.find((p) => p.id === product.id);
  
    const filterProduct = (product) =>
      selectedProduct.filter((p) => p.id !== product.id);
  
    const handleChange = (product) => {
      const exits = findProduct(product);
      const filteredPeople = exits ? filterProduct(product) : [...selectedProduct, product]
  
      setSelectedProduct(filteredPeople)
    };

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

      function handleDelete(){ 
        console.log(selectedProduct)
      }


  return (
    <div className='admin-product-table-area'>
   {/* <Button variant="outlined" color="error">
  delete product
</Button> */}
    <Box sx={{ height: 400, width: '100%' }}>
      { !loading && <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />}
      { loading && <p>Loading...</p> }
    </Box>
    </div>
  );
}