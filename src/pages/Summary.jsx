import React, { useContext } from 'react'
import tick from '../assets/tick.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/progress bar/ProgressBar';
import { CartContext } from '../context/CartContext';


const Summary = () => {
  const location = useLocation();
  const { order_id,timestamp } = location.state || {};
  
    
  
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };
        return date.toLocaleString("en-US", options);
      };
 
  return (
    <div className='container flex flex-col items-center mx-auto'>
          <ProgressBar currentStep={3}/>
        
        <div className=''><img src={tick} className=''/></div>
       
        <h1 className='text-gray-800 text-4xl font-bold'>Thank you</h1>
        <p className='text-gray-600 my-3 px-3 text-center'> Your payment successful! and Your order has been placed.</p>
        <p className='text-gray-700'>Order Id: <span className='font-semibold'>{order_id}</span></p>
        <p className="text-gray-700 my-3">{formatDate(timestamp)}</p>
        
        <Link to="/orders"><button 
        className='bg-[#35ac75] hover:bg-black text-white p-3 rounded-md font-semibold shadow-md transition'>
          Track order Status</button></Link>
        <br/><Link to="/" className='text-[#35ac75] font-bold'>Back to Home</Link>


    </div>
  )
}

export default Summary