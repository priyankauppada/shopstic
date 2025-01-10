import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa6";
import ProductCard from './ProductCard';


import { categoryproducts } from '../../services/searchServices';



const EcommerceDescription = ({data}) => {
  //console.log(data)
  let [activeTab, setActiveTab]=useState("description")
  const [products, setProducts] = useState([]);
  const[tempProducts, setTempProducts]=useState([])

  let { reviews,description, availabilityStatus,stock, brand, dimensions, category, returnPolicy, shippingInformation,
     warrantyInformation,weight, minimumOrderQuantity,id}=data 

   
     
  
  useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await categoryproducts(category); 
          setProducts(response.data.products);
          const filteredProducts = products.filter(product => product.id !== id);
          if(filteredProducts.length>5){
            setTempProducts(filteredProducts.slice(0, 5))
          }else{
            setTempProducts(filteredProducts)
          }
          
          
        } catch (err) {
          console.log(err)
        } 
      };
      fetchProducts();
  }, [category,id,products]); 
  
  return (
  <div>
      <div className="container mx-auto py-10 bg-slate-100">
        <div className="p-4">
          <button className={`${activeTab =="description" ? "text-[#35ac75] rounded-md font-medium shadow-lg p-2 mr-2"
                : "text-gray-500 border border-gray-400 rounded-md p-2 mr-3"} hover:text-black transition-colors`}
            onClick={e=>{setActiveTab("description")}}>Description</button>

          <button className={`${activeTab =="additional" ? "text-[#35ac75] rounded-md font-medium shadow-lg p-2 mr-2"
                : "text-gray-500 border border-gray-400 rounded-md p-2 mr-3"
            } hover:text-black transition-colors`} 
            onClick={e=>{setActiveTab("additional")}}>Additional Info </button>

          <button className={`${activeTab =="reviews" ? "text-[#35ac75] font-medium rounded-md  shadow-lg p-2 mr-2"
                : "text-gray-500 border border-gray-400 rounded-md p-2 mr-3"
            } hover:text-black transition-colors`} 
            onClick={e=>{setActiveTab("reviews")}}>Reviews ({reviews.length}) </button>
        </div>
      
        <p className="text-gray-700 border shadow-lg">
          {activeTab=="description" && <p className='px-14 pt-6 pb-12 text-sm'>{description} </p>}
          {activeTab=="reviews" && 
              <div className='px-14'>
                <p className='text-xl text-black my-5'> Customer ratings & Comments</p>
                {reviews.map((review,index)=>
                  <div key={"review"+index} className=''>
                    <div className='flex flex-col mb-10 space-y-2 '>
                      <div className='flex items-center space-x-2'>
                        <p className='bg-white shadow-md p-3 rounded-full'><FaUser /> </p>
                        <p>{review.reviewerName}</p>
                      </div>
                      
                      <p>{'⭐'.repeat(Math.floor(review.rating)) + (review.rating  % 1 >= 0.5 ? '⭐' : '') + 
                          '☆'.repeat(5 - Math.ceil(review.rating))} </p>


                      <p className='text-sm'> Reviewed on <span className='font-semibold'>
                        {new Date(review.date).toISOString().slice(0, 10)}</span> </p>
                      <p className='text-sm'>{review.comment}</p>
                    </div>
                  </div>
                )}

              </div>
          }
          {activeTab=="additional" &&
            <div className='  px-14'>
              <p className='text-xl text-black my-5'> Product Specifications</p>
              <table className='table-auto text-sm mb-10'>
                  
                    <tr className=''>
                      <td className='bg-gray-300 p-3 font-medium border-b-white border-b-4'> Category</td>
                      <td className='bg-gray-200 p-3 border-b-4 border-b-white'>{category}</td>
                    </tr>
                    <tr>
                      <td className='bg-gray-300 p-3 font-medium border-b-white border-b-4'>Brand</td>
                      <td className='bg-gray-200 p-3 border-b-white border-b-4'>{brand}</td>
                      
                    </tr>
                    <tr>
                      <td className='bg-gray-300 p-3 font-medium border-b-white border-b-4'>Dimensions</td>
                      <td className='bg-gray-200 p-3 border-b-white border-b-4'>
                          {Math.floor(dimensions.width)}"W x {Math.floor(dimensions.height)}"L x {Math.floor(dimensions.depth)}"H
                      </td>
                    </tr>
                    <tr>
                      <td className='bg-gray-300 p-3 font-medium border-b-white border-b-4'>Weight</td>
                      <td className='bg-gray-200 p-3 border-b-white border-b-4'>{weight*450}g</td>
                    </tr>
                    <tr>
                      <td className='bg-gray-300 p-3 font-medium border-b-white border-b-4'>Warranty</td>
                      <td className='bg-gray-200 p-3 border-b-white border-b-4'>{warrantyInformation}</td>
                    </tr>
                    <tr>
                      <td className='bg-gray-300 p-3 font-medium border-b-white border-b-4'>Minimum Order</td>
                      <td className='bg-gray-200 p-3 border-b-white border-b-4'>{minimumOrderQuantity}</td>
                    </tr>
                  
              </table>
            </div>
          }
        </p>
      </div>
      <div>
      <h1 className="text-2xl font-bold capitalize mt-14 ml-7 mb-6">Related Products</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {tempProducts.map((product,index)=>(
                  <ProductCard key={index} data={product}/>
          ))}
      </div>
      </div>
  </div>
  
)};

export default EcommerceDescription;