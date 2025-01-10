import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title";

const FeaturedCategories = () => {
  const navigate=useNavigate()
  const categories = [
    { name: "Kitchen", icon: "🍴", path:"kitchen-accessories"},
    { name: "Mobiles", icon: "📱", path:"smartphones" },
    { name: "vehicle", icon: "🚗", path:"vehicle" },
    { name: "Sports", icon: "🥎", path:"sports-accessories"},
    { name: "Groceries", icon: "🛒", path:"groceries"},
    { name: "Watches", icon: "⌚", path:"mens-watches" },
    { name: "motorcycle", icon: "🏍️", path:"motorcycle" },
    { name: "Electronics", icon: "🎧", path:"mobile-accessories"},
  ];
  function handleFeaturedCategory(pathName){
    navigate("/category/"+pathName)
  }

  return (
    <div className="py-8">
      
      <h2 className="text-xl md:text-2xl font-bold mb-6 ml-6"><Title text1={"Featured"} text2={"Categories"} /></h2>
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto md:px-16 sm:px-8">
        {categories.map((category, index) => (
          <div
            key={index} onClick={e=>handleFeaturedCategory(category.path)}
            className="flex flex-col items-center p-4 hover:border w-40 h-40 cursor-pointer gap-2"
          >
            <div className="flex items-center justify-center text-4xl w-20 h-20 rounded-full bg-green-100">
              {category.icon}
            </div>
            <p className="text-sm font-medium text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
