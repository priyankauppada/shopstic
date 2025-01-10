import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartTotal = ({total}) => {
    const navigate = useNavigate();
    const handleProceed = () => {
        navigate("/address"); // Navigate to the Address page
      };
  return (
    <div className=''> 
       
        <h3 className=" text-xl font-semibold text-gray-800 mt-8 mb-4">Cart Totals</h3>
        <div className="flex justify-between border-b  pb-3 mb-3">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-semibold">Rs.{total.toFixed()}</span>
        </div>
        <div className="flex justify-between border-b pb-3 mb-3">
          <span className="text-gray-700">Delivery Charges</span>
          <span className="font-semibold">Free</span>
        </div>
        <div className="flex justify-between text-lg font-bold pb-4">
          <span className="text-gray-900">Total</span>
          <span>Rs.{(total).toFixed()}</span>
        </div>
        <button
          className="w-full bg-[#35ac75] hover:bg-black text-white py-3 rounded-md font-semibold shadow-md transition"
            onClick={handleProceed}>
            PROCEED TO CHECKOUT
        </button>
       

    </div>
  )
}

export default CartTotal