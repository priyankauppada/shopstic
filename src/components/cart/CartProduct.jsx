import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CartProduct = ({item}) => {
    const { cartState, dispatch } = useContext(CartContext);
    
    const [finalCart,setFinalCart]=useState([cartState.items])   
       
    
     
    const handleRemove = async (id) => {
      try {
        await axios.delete(`https://dummyjson.com/carts/1`);
        dispatch({ type: "REMOVE_ITEM", payload: { id } });
        const updatedProducts = finalCart.filter((product) => product.id !== id);
    setFinalCart(updatedProducts);
     
        console.log("upadted cart:",updatedProducts)
        
      } catch (error) {
        console.error("Error removing item:", error);
      }
    };
  
    const handleQuantityChange = (id, quantity) => {
      if (quantity > 0) {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
      }
     
    };
  return (
    <div>
        <div className='text-sm grid grid-cols-4 border-b-2 border-gray-300 shadow-lg py-2'>
            <div className='flex col-span-3'>
              
                    <Link to={`/product/${item.id}`} > 
                    <div className=' w-28 h-28 mr-6 '>  
                    <img src={item.thumbnail} className='h-full w-full object-cover'/>  </div>
                    </Link> 
               
                <div>
                 <h2 className="font-semibold md:text-base text-gray-700">{item.title}</h2>
                 <button className="px-2 py-1 rounded-l-lg"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-
                 </button>
                 <span className="px-3 py-1">{item.quantity}</span>
                 <button className="px-2 py-1  rounded-r-lg"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+
                 </button>
                 <br/>
                 <button className="px-3 py-1 text-white bg-red-700 mt-3 rounded-lg " 
                    onClick={() => handleRemove(item.id)} > Remove Item
                 </button>
                 

                 </div>
                 
            </div>

            
            <div className='ml-8 text-gray-700 font-medium'>
                Rs.{(item.price*item.quantity).toFixed()}
            </div>
            


        </div>
       
    </div>
  )
}

export default CartProduct