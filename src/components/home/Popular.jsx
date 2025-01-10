import React, { useEffect, useState } from "react";


import ProductCard from "../product details/ProductCard";
import { categoryproducts } from "../../services/searchServices";
import Title from "../Title";
const categories = [
    { name: "Bags", path:"womens-bags" },
    { name: "Beauty", path:"beauty" },
    { name: "Fragrance", path:"fragrances"},
    { name: "Tops", path:"tops"},
    { name: "Shoes", path:"womens-shoes" },
]

const Popular = () => {
  const [activeCategory, setActiveCategory] = useState("womens-bags");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await categoryproducts(activeCategory);
        //console.log(activeCategory) 
        setProducts(response.data.products);
      } catch (err) {
        console.log(err)
      } 
    };
    fetchProducts();
  }, [activeCategory]); 
  

  return (
    <div className="">
      <div className="md:flex justify-between items-center mb-6">
        <h1 className=" text-2xl font-bold ml-9"><Title text1={"Popular"} text2={"Products"} /></h1>
        <div className="mt-3 flex mx-5 md:mr-20 space-x-4">
          {categories.map((category,index) => (
            <button
              key={index}
              className={`${
                activeCategory === category.path
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700"
              } hover:text-blue-500 transition-colors`}
              onClick={() => setActiveCategory(category.path)}
            >
              {category.name}
            </button>
          ))}
        </div>
       
      </div>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 ">
      {products.map((product,index)=>(
                  <ProductCard key={index} data={product}/>
          ))}
      </div>
      
      
      
    </div>
  );
};

export default Popular;
