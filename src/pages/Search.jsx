import React, { useEffect, useState } from 'react'

import { searchproduct } from '../services/searchServices'
import ProductCard from '../components/product details/ProductCard'
import Header from '../components/category navbar/Header'
import Features from '../components/home/Features'
import emptyorders1 from '../assets/emptyorders1.jpg'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [searchParams] = useSearchParams();
  let [products,setProducts]=useState([])
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added loading state
 //console.log(searchKeyword)
 
 useEffect(() => {
  const keyword = searchParams.get("keyword");
  setSearchKeyword(keyword || "");
}, [searchParams]);
  useEffect(() => {
    if (!searchKeyword.trim()) {
      setProducts([]); 
      return;
    } 

    const getProducts = async () => {
      setIsLoading(true); // Show loading spinner
      try {
        const res = await searchproduct({ params: { q: searchKeyword } });
        setProducts(res.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); // Hide loading spinner
      }
    };

    getProducts();
  }, [searchKeyword]);
  
  return (
    <div className=''>
        <Header/>
        
        {products.length>0?(
          <div className='container mx-auto flex justify-items-center'>
            
          <div className=' '>
              <h1 className='mx-4 mt-2 text-gray-600 leading-7 font-medium text-lg text-left'> Search results for "{searchKeyword}"</h1>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                  {products.map((product)=>(
                      <ProductCard data={product}/>
                  ))
                  }
              </div>
          </div>
      
    </div>

        ):(<div className="h-[75vh] flex flex-col justify-center items-center">
                  <img src={emptyorders1} className="h-44 md:h-64 w-auto mt-5"/>
                  <p className="font-semibold text-2xl text-gray-700 mt-4 mb-2"> No Items Found for "{searchKeyword}" </p>
                  <p> Try for another products or check in categories! </p>
        
        
                </div>)

        }
         
     <Features/>
    </div>
  )
}

export default Search