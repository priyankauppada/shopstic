import React, { useState, useEffect, useContext} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { userLoginStatus } from '../../Utils/utils';
import { CartContext } from '../../context/CartContext';


const ProductDetails = ({data}) => {
  let { id,price,title,discountPercentage,thumbnail,rating,category,description,stock}=data
  let discountedPrice = (price - (price * discountPercentage / 100))
  let userLogged=userLoginStatus()
 

  

 let [quantity,setQuantity]=useState(1)

 const { dispatch } = useContext(CartContext);
 const handleAddToCart = async () => {
  if(userLogged){
    if(quantity<=stock){
      let userData=JSON.parse(localStorage.getItem("userData"))
      const userId = userData.id;
      let product=[{id:data.id, quantity:parseInt(quantity)}]
      try {
        const response = await axios.post("https://dummyjson.com/carts/add", {userId:userId,
          products: [{ id: data.id, quantity: parseInt(quantity) }],
        
        });
        //console.log(data)
        dispatch({ type: "ADD_ITEM", payload: data});
        //console.log(response)
        toast.success("Added to cart")
        
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }

    }

  }else{
    toast.error("Please Login")
  }
  
 
};
const addToCart= async() =>{
    //console.log(id,parseInt(quantity))
    if(userLogged){
      if(quantity<=stock){
        let userData=JSON.parse(localStorage.getItem("userData"))
        const userId = userData.id;
        let product=[{id:id, quantity:parseInt(quantity)}]
        //console.log(userId,product)
        try{
          let apiResponse=await axios.post('https://dummyjson.com/carts/add',{userId:userId, products:product})
          console.log(apiResponse)
          toast.success("Added to cart")
        }catch(err){
          console.log(err)
        }
       
      }else{
        toast.error("We don't have enough stock", {position: "bottom-right", });
      }

    }else{
      toast.error("Please Login")
    }
    
  }
  return (
    <div>
        <div className="p-5">
                  <h1 className="text-3xl font-semibold mb-4">{data.title}</h1>
                  <div className=' flex items-center leading-10'>
                      <div className='flex items-center mb-3'>
                          <p className='font-bold leading-loose text-xl text-[#35ac75] mr-2'>Rs.{Math.round(discountedPrice) }</p>
                          <p className=' text-gray-600 text-[13px] line-through '> Rs.{Math.round(price) }</p>
                          <p className='bg-red-700 text-white px-2 rounded-md ml-2 text-sm'>{Math.round(discountPercentage)}% Off</p>
                          <p className='font-medium text-gray-600  ml-3'>{rating.toFixed(1)}⭐ </p>
                      </div>
                        
                        
                    </div>
                  <p className="text-sm text-gray-700 mb-3">{description}</p>
                 
                  <button className="bg-[#35ac75] text-white py-2 px-6 rounded mt-4 hover:bg-gray-800"
                        // onClick={e=>addToCart()}
                         onClick={handleAddToCart}>
                        
                    ADD TO CART
                  </button>
                  
                   {/* Footer Details */}
                    <div className="text-sm text-gray-500 mt-4">
                      <p>100% Original product.</p>
                      <p>Cash on delivery is available on this product.</p>
                      <p>Easy return and exchange policy within 7 days.</p>
                    </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default ProductDetails