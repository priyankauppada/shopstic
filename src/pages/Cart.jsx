import React, { useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import CartProduct from "../components/cart/CartProduct";
import CartTotal from "../components/cart/CartTotal";
import ProgressBar from "../components/progress bar/ProgressBar";
import emptyCart from '../assets/emptyCart.png'
import Title from "../components/Title";

const Cart = () => {
  const { cartState} = useContext(CartContext);
  const { items, total } = cartState;
   
  const totalItems = cartState.items.reduce((count, item) => count + item.quantity, 0);
  
  
  return (
  <div className="container mx-auto">
    {items.length > 0 ? (
      <div className="md:container md:mx-auto p-4 flex flex-col">
      <ProgressBar currentStep={0} />
      <Title text1={"Your Cart"} text2={`(${totalItems})`}/>
   
      <div className="mt-3 space-y-4">
      
      {cartState.items.map((item) => (
          <div className="" key={item.id}>
             <CartProduct item={item} />
          </div>
        ))}
      </div>
      <div className="px-4 md:self-end md:w-1/2 md:pr-24 ">
        <CartTotal total={cartState.total}/>
      </div>
  </div>

    ): (
        <div className="flex flex-col justify-center items-center my-5">
          <img src={emptyCart} className="h-64 w-auto"/>
          <p className="font-semibold text-3xl"> Your cart is empty</p>
          <p className=" text-gray-700 my-5 text-center">Loooks like you have not added any item to your cart. Go Ahead ahead & explore top categories </p>
          <Link className="bg-[#319d6b]  text-white text-center pt-1 text-sm w-28 h-8 rounded-lg"
           to="/">Shop Now</Link>
        </div>
      )}

  </div>
   

   

    
  );
};

export default Cart;
