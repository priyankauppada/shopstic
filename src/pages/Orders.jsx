import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import emptyorders1 from '../assets/emptyorders1.jpg'
import Title from "../components/Title";

const Orders= () => {
  const { cartState } = useContext(CartContext);
  const { orders } = cartState;

  return (
    <div className=" container mx-auto p-4">
      {orders.length>0?<Title text1={"Your"} text2={"Orders"}/>:""}
      {orders.length > 0 ? (
        [...orders].reverse().map((order) => (
          <div key={order.id} className="border-2 p-4 rounded mb-4 shadow-lg space-y-2">
            
            <h2 className="font-bold">Order ID: {order.id}</h2>
            <p className="text-sm text-gray-500">Date: {order.date}</p>
            <p className="font-semibold pb-3">Total Amount paid: Rs.{order.total.toFixed()}</p>
            <ul className="px-4 py-2">
              {order.items.map((item) => (
                <li key={item.id} className="grid md:grid-cols-4 border-2 p-2 mb-4 shadow-md">
                  <div className="flex items-center col-span-2">
                  <Link to={`/product/${item.id}`} > 
                        <div className=' w-28 h-28 mr-6 '>  
                            <img src={item.thumbnail} className='h-full w-full object-cover'/>  </div>
                    </Link> 
                    <div>
                    <h2 className="font-semibold text-sm">{item.title}</h2>
                    <div className='text-gray-700 text-sm'>
                        Rs.{(item.price).toFixed()} &nbsp;  Quantity: {item.quantity} </div>
                        <p className="text-sm">Payment: COD</p>   
                    </div>
                    

                  </div>
                  
                    <p className="place-self-center text-sm"><span className="inline-block mr-2 text-[9px]">🟢</span>Order Placed</p>
      
                    <button className="bg-[#319d6b] text-white text-sm w-28 h-8 rounded-lg place-self-center">Track order</button>
                    
            
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img src={emptyorders1} className="h-44 md:h-64 w-auto mt-5"/>
          <p className="font-semibold text-2xl text-gray-700 mt-4 mb-2"> No orders Found.</p>
          <p> Looks like you haven't made your yet!</p>


        </div>
        
      )}
    </div>
  );
};

export default Orders;
