import React, { useEffect, useState } from 'react'
import { TbAppsFilled } from "react-icons/tb";

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AllCategoriesBtn = () => {
    const [categories, setCategories] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/categories");
        setCategories(response.data); // Update state with categories
        setShowDropdown(!showDropdown); // Show dropdown
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    const handleCategoryClick = (category) => {
      setShowDropdown(false); // Close dropdown
      navigate(`/category/${category}`); // Navigate programmatically without refreshing
    };
  return (
    <div className="relative text-sm p-4">
        <button className=" bg-[#35ac75] text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={fetchCategories}>  Browse All Categories 
        </button>
     
       {showDropdown && (
        <div
        className="absolute top-12 left-0 w-48 max-h-80 overflow-y-auto bg-slate-200 border border-gray-200 rounded-lg shadow-lg z-50">
      
        {categories.length > 0 ? (categories.map((i, index) => (
            <button key={index}  onClick={() => handleCategoryClick(i.slug)}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                {i.name}
            </button>
          ))
        ) : (
          <div className="p-4 text-gray-500">No categories available</div>
        )}
        </div>
       )}
  </div>
  )
}

export default AllCategoriesBtn