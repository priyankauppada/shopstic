import React from 'react';
import { RiExchangeFundsLine } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { MdHeadsetMic } from "react-icons/md";


import cute2 from '../../assets/cute2.jpg'
const Features= () => {
  const icons = [
    { icon: <RiExchangeFundsLine/>, title: 'Easy Exchange Policy', description: 'We offer hassle free exchange policy' },
    { icon: <SiTicktick />, title: '7 Days Return Policy', description: 'We provide 7 days free return policy' },
    { icon: <MdHeadsetMic/>, title: 'Best customer support', description: 'We provide 24/7 customer support' },
  ];

  return (
    <div className='bg-gradient-to-r from-[#daecdf] to-[#aae3b9] pt-8'>
        <div className="container flex flex-col justify-around sm:flex-row  mx-auto pb-10 ">
        {icons.map((icon, index) => (
            <div key={index} className='py-6'>
                <div className="flex flex-col items-center ">
                        <span className="text-5xl pb-4">{icon.icon}</span>
                        <h3 className='text-gray-800 font-semibold'>{icon.title}</h3>
                        <p className='text-gray-500 text-sm '>{icon.description}</p>
                </div>
            </div>
        ))}
        </div>
        <div className='flex flex-col items-center md:flex-row justify-around p-10 '>
            <div className=''>
                <img src={cute2} className='h-96 rounded-lg'/>
            </div>
            <div className='text-center'>
                <h2 className='sm:text-lg md:text-3xl font-bold my-4'>Subscribe now & get 20% off </h2>
                <p className='sm:text-sm md:text-xl text-gray-500 mb-4'> stay home, stay safe & happy shopping</p>
                <div className=''>
                    <input placeholder="Enter your email "className='text-sm sm:w-48 md:w-60 outline-none p-3 rounded-s-2xl'/>
                    <button className='bg-[#35ac75] text-white text-sm p-3 rounded-e-2xl'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Features;