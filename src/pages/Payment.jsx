import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import ProgressBar from '../components/progress bar/ProgressBar'
import { CartContext } from '../context/CartContext';
import phonepe from '../assets/phonePe.png'
import razorpay from '../assets/razorpay.jpg'
import Title from '../components/Title';

const Payment = () => {
  const navigate = useNavigate();
  const { cartState, dispatch } = useContext(CartContext);
  console.log(cartState)
  //const { items, total, discountedTotal } = cartState;
  
  const order_id = `order_${Math.floor(Math.random() * 1000000)}`;
  const timestamp = new Date().toISOString(); 
  
  const handleCashonDelivery = () => {
          dispatch({ type: "PLACE_ORDER" })
          navigate("/summary",{
            state: { order_id, timestamp },
          })

  };
 
      useEffect(()=>{
        const script=document.createElement("script")
        script.src="https://checkout.razorpay.com/v1/checkout.js"
        script.async=true
        document.body.appendChild(script )
        return ()=>{
          document.body.removeChild(script)
        }
    },[])
  console.log(cartState.items)
  const handleOnlinePayment = async () => {
    
 
  var options = {
    "key": "rzp_test_8gNHxGCGlM9", // Enter the Key ID generated from the Dashboard
    "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "priyanka", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
  }
  const razorpay = new window.Razorpay(options)
  razorpay.on("payment.failed", function (response) {
      console.error("Payment failed!", response.error);
      toast.error("Payment failed! Please try Cash on delivery.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  });
  razorpay.open();

 
}
  return (
    <div className='container mx-auto px-4 '>
      <ProgressBar currentStep={2} />
      <Title text1={"Select Payment"} text2={"Method"}/>
     
      <div className="flex flex-col md:flex-row mt-5 ">
        <div className='border-2 shadow-lg rounded-lg p-3 md:mx-20 mb-10 md:mb-0'>
          <span>🟢 Cash on Delivery</span> 
          <span className='inline-block ms-5 text-lg font-semibold'>Rs.{cartState.total.toFixed()} </span>
          <p className='mt-3 text-sm text-gray-700'> No discounts applied when you pay on delivery</p>
          <button className='bg-gray-200 rounded-lg p-2 font-semibold mt-5' onClick={handleCashonDelivery}>Place Order</button>
       </div>
       <div className='border-2 shadow-lg rounded-lg p-3'>
        <div >
          <h3 className='text-gray-700 font-semibold' > 🟢 Pay online
          <span className='inline-block ms-5 text-lg text-green-700 font-semibold'>Rs.{cartState.discountedTotal.toFixed()} </span> 
          </h3>
          <span className='inline-block mt-3 line-through text-xs me-3'>
            Rs.{(cartState.total).toFixed()}</span>
          <span className='inline-block mt-3 text-xs bg-green-300 font-bold px-1 rounded-md'>
            Save Rs.{(cartState.total-cartState.discountedTotal).toFixed()}</span>
        </div>
          
          <button className='border-gray-300 rounded-md mt-4 p-2 border-2' onClick={handleOnlinePayment}>
            <img src={phonepe} className='h-8 w-32'/></button>
          <button className='border-gray-300 ms-3 mt-4 rounded-md p-2 border-2' onClick={handleOnlinePayment}>
          <img src={razorpay} className='h-8 w-32'/></button>
         

       </div>
       
      
    </div>
    <ToastContainer/>
    </div>
  )
}

export default Payment