import React, {useState, useEffect} from 'react'
import { IoMdHeadset } from "react-icons/io";
import SubCategories from './SubCategories';
import AllCategoriesBtn from './AllCategoriesBtn';



const Header = () => {
  

  return (
    <div className='hidden py-2 md:flex text-sm justify-around items-center '>
      <AllCategoriesBtn/>
      <nav className='flex items-center basis-3/5 text-sm '>
           <SubCategories/>
      </nav>
     <div className='md:flex items-center'>
          <div className='pr-3'>
            <IoMdHeadset className='text-3xl text-slate-500'/>
          </div>
          <div>
              <p className='font-semibold text-xl text-[#35ac75]'> 1900-888 </p>
              <p className='text-[10px] text-slate-500'> 24/7 support center </p>
          </div>
     </div>

    </div>
  )
}

export default Header