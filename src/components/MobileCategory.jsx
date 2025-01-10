import React, { useEffect, useState } from 'react'
import { FiGrid } from 'react-icons/fi'
import { categories } from '../services/searchServices'
import { useNavigate } from "react-router-dom";

const MobileCategory = () => {

  let [category,setCategory]=useState([])
  const navigate = useNavigate();

  const handleCategoryClick = (categoryname) => {
    navigate(`/category/${categoryname}`);
  };

  useEffect( ()=>{
    async function getCategories() {
        let res= await categories()
        setCategory(res.data)
    }
    getCategories()
  },[])

  return (
    <div className=''>
        {/* Browse All Categories Button */}
        <div className='group relative'>
                <button 
                        className="bg-[#35ac75] text-white text-sm p-2 rounded gap-2 flex justify-center items-center hover:bg-red-600">
                        <FiGrid className="mr-1" /> Browse All Categories
                </button>
                <div className='group-hover:block hidden absolute bg-slate-100 p-4 w-44 left-5'>
                    {category.map((i,index) => 
                       <div key={index} onClick={() => handleCategoryClick(i.slug)}
                        className='cursor-pointer p-2 text-sm text-gray-600 hover:text-[#35ac75] hover:text-base hover:bg-white' > 
                        {i.name} </div>
                    )}
                </div>
        </div> 
        {/* Browse All Categories Button */}

    </div>
  )
}

export default MobileCategory