import React from 'react';

import coupon1 from '../../assets/coupon1.jpg'
import coupon2 from '../../assets/coupon2.jpg'
import coupon3 from '../../assets/coupon3.jpg'
import coupon4 from '../../assets/coupon4.jpg'
import { useNavigate } from 'react-router-dom';
import Title from '../Title';

const Coupons = () => {
   const coupons=[
    {imgUrl:coupon3, path:"womens-dresses"},
    {imgUrl:coupon2, path:"smartphones"},
    {imgUrl:coupon1, path:"groceries"},
    {imgUrl:coupon4, path:"furniture"},

   ]
 
   const navigate=useNavigate()



   function handleOffers(pathName){
        navigate("/category/"+pathName)
   }

  return (
    <div className='p-8'>
        <h2 className='font-bold text-2xl mb-4'><Title text1={"Offers for"} text2={"You"} /></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
            {coupons.map((coupon, index) => (
                    <div key={index} className="hover:border cursor-pointer rounded-lg shadow-md overflow-hidden">
                    <img src={coupon.imgUrl} alt={coupon.path} onClick={e=>handleOffers(coupon.path)}
                        className="w-full h-48 " />
                    </div>
            ))}
        </div>
    </div>
    
  );
};

export default Coupons;
