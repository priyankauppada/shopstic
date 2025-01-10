import React, { useEffect, useState } from 'react'
import CategoryWiseProducts from '../product details/ProductCard';
import ProductCard from '../product details/ProductCard';


const Collection = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
  
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products); // Update state with the list of products
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      }
    };
  
    // Fetch products when the component mounts
    useEffect(() => {
      fetchProducts();
    }, []);
  return (
    <div className='space-y-8'>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8 ">
          {products.map((product,index)=>(
                  <ProductCard key={index} data={product}/>
          ))}
      </div>
       
        
    </div>
  )
}

export default Collection