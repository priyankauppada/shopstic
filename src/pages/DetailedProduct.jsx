import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {GlassMagnifier, MagnifierContainer, MagnifierPreview, MagnifierZoom, SideBySideMagnifier} from "react-image-magnifiers";

import { singleproduct } from '../services/searchServices';
import Header from '../components/category navbar/Header'

import ProductDetails from '../components/product details/ProductDetails';
import EcommerceDescription from '../components/product details/ProductExtraDetails';




const DetailedProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await singleproduct(id); 
        setProduct(response.data);
        setMainImage(response.data.images[0])
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false); // Hide loading spinner
      }
    };
    fetchProduct();
  }, [id]);


  return (
    <div className='p-4'> 
      
     <Header/>
     {isLoading && <p className="text-center text-gray-500"><button type="button" className="" disabled>
            <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
   
                </svg>
                Loading...
              </button></p>}
     
      
      {product ? (
        <>
          
          <div className='sm:flex md:flex-row justify-center md:space-x-12'>
               <div className='flex space-x-10'>
                <div className="flex  flex-col justify-center space-y-4 items-center">
                  {product.images.map((image,i)=>(
                      <div key={i} className='gap-4'> 
                        <img src={image} className='h-20 w-20 border border-indigo-200 hover:outline outline-2 outline-green-700' 
                        onMouseOver={e=>setMainImage(image)}/> 
                      </div>
                    ))}
                </div>

                <div className= 'h-80 w-80   rounded-lg border shadow-md '  >
                    <img src={mainImage}  alt={product.title} className='' />
                </div> 
                </div>
          
              
                
                {/* 
                  //<img src={mainImage} alt={product.title} className='w-96 h-auto ' />
                   <SideBySideMagnifier imageSrc={mainImage} alwaysInPlace={false} 
                   fillAvailableSpace={false} 
                  zoomContainerBorder='1px solid #ccc'
                  zoomPosition="right"
                  zoomContainerBoxShadow='0 4px 8px rgba(0,0,0,0.3)'
                  style={{width:'300px', height:'300px'}}
                   />

                */}
                
               
                <div className='sm:w-full md:w-2/5 '>
                  <ProductDetails data={product}/>
                </div>
               
          
              
              
          </div>
          <EcommerceDescription  data={product}/>
        </>
      ) : (
        <p>No product details available.</p>
      )}           


    
  
                         
                      
   
   
        
    </div>
  )
}

export default DetailedProduct