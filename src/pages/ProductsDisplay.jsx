import React, { useState, useEffect, useContext } from 'react'
import {useParams, Link} from 'react-router-dom';

import Title from '../components/Title';
import { FilterContext } from '../context/FilterContext';
import { categoryproducts } from '../services/searchServices';
import { getproducts } from '../services/getProductsService';
import Features from '../components/home/Features';
import ProductCard from '../components/product details/ProductCard';
import Header from '../components/category navbar/Header';
import FilterSidebar from '../components/filters/Filters';
import SortDropdown from '../components/filters/SortDropdown';

const CategoryWiseProducts = () => {
  const { categoryname } = useParams();
  //console.log(useParams())
  const [products, setProducts] = useState([]);
  const [toggle,setToggle]=useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (categoryname==="all Products") {
          response = await getproducts();
          
          //console.log(response)
        } else {
          response = await categoryproducts(categoryname);
          //console.log(response)
        }
        setProducts(response.data.products); 
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [categoryname]);

  const { filterState } = useContext(FilterContext);

  
  // Apply filters
  const filteredProducts = products.filter(
    (product) =>
      product.price <= filterState.priceRange &&
      product.rating >= filterState.rating
  );
  // Apply primary sorting
  const primarySortedProducts = filteredProducts.sort((a, b) => {
    switch (filterState.primarySort) {
      case "priceLowToHigh":
        return a.price - b.price;
      case "priceHighToLow":
        return b.price - a.price;
      case "relevant":
      default:
        return 0; // Default sorting logic
    }
  });

  // Apply secondary sorting
  const sortedProducts = primarySortedProducts.sort((a, b) => {
    switch (filterState.secondarySort) {
      case "ratingHighToLow":
        return b.rating - a.rating;
      case "ratingLowToHigh":
        return a.rating - b.rating;
      default:
        return 0; // No secondary sort applied
    }
  });
  return (
  <div className=''>
      <Header/>
      <div className='container px-2 md:mx-auto py-2'>
        <div className='ml-4 md:ml-0 flex justify-between'>
          <Title text1={categoryname||"All Products"} text2={""}/>
          <div className='hidden md:block  '>
            <SortDropdown/>
          </div>
          <button onClick={()=>{setToggle(!toggle)}} 
          className=' md:hidden border-2 border-gray-300 text-sm  px-4 rounded-lg mr-4'> <span className='text-xs'>🟢</span> Filters</button>

        </div>
        
        {toggle ? (<div>
            <div className='block md:hidden'>
            <FilterSidebar />
        </div>
        <div className='block md:hidden'>
          <SortDropdown/>
        </div> </div>) :""
        }
        
        
      </div>
      <div className='flex'>
        <div className='hidden md:block'>
            <FilterSidebar />
        </div>
     
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8 ">
          {sortedProducts.map((product,index)=>(
                  <ProductCard key={index} data={product}/>
          ))}
      </div>

      </div>
      <Features/>
  </div>
)}

export default CategoryWiseProducts