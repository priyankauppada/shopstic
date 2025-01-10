
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({data}) => {
  //console.log(data)
  let { id,price,title,discountPercentage,thumbnail,rating,category}=data
  let discountedPrice = (price - (price * discountPercentage / 100))
  //console.log(price)
  //console.log(id)
  return (
    <Link className='hover:border' to= {`/product/${id}`} >    
    <div className='shadow-lg m-2 border'>
      
                  <div className="p-4">
                    <div className="text-center">
                      <img className='bg-[#edf1f7] 'src= {thumbnail}/>
                    </div>
                    
                    <p className='leading-7 text-[13px] text-slate-500  capitalize' > {category}</p>
                    <p className=' hidden md:block leading-7 text-[15px] text-gray-600 font-medium hover: '> 
                    { title.length>20 ?title.substring(0, 10) + '...' : title}</p>
                    <p className='sm:block md:hidden leading-7 text-[15px] text-gray-600 font-medium hover: '> 
                    { title.length>15 ?title.substring(0, 10) + '...' : title}</p>

                      
                    
                      <div className='flex items-center'>
                          <p className='font-semibold text-[#35ac75] mr-2'>Rs.{Math.round(discountedPrice) }</p>
                          <p className=' text-gray-600 text-[13px] line-through '>Rs.{Math.round(price) }</p>
                          <p className='font-medium md:mx-auto ml-3 text-gray-600 text-[13px] '>{rating.toFixed(1)}⭐ </p>
                      </div>
                        
                       
                 
                   
                  </div>
    
    </div>
    </Link>
  );
};

export default ProductCard;
