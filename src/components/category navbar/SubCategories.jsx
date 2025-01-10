import React from 'react'
import {Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const SubCategories = () => {
    const categories = [
        { name: 'Home', subcategories: [], path: '/' },
        {
          name: 'Women',
          subcategories: [
            { name: 'Cloths', path: 'womens-dresses' },
            { name: 'Bags', path: 'womens-bags' },
            { name: 'Jewellery', path: 'womens-jewellery' },
            {name: 'FootWear', path:'womens-shoes'},
            {name: 'Women Tops', path:'tops'},
            {name: 'Watches', path:'womens-watches'},
            
            
          ],
        },
        {
          name: 'Men',
          subcategories: [
            {name: 'Cloths', path: 'mens-shirts' },
            {name: 'FootWear', path:'mens-shoes'},
            {name: 'Watches', path:'mens-watches'},
            
            
          ],
        },
        {
          name: 'Beauty&Fashion',
          subcategories: [
            { name: 'Beauty', path: 'beauty' },
            { name: 'Fragrances', path: 'fragrances' },
            {name: 'Skin-Care', path:'skin-care'},
            {name: 'Sun-Glasses', path:'sunglasses'},
          ],
        },
        {
          name: 'Electronics',
          subcategories: [
            {name: 'Mobiles', path: 'smartphones' },
            { name: 'Laptops', path: 'laptops' },
            {name: 'Mobile-pouch', path:'mobile-accessories'},
            {name: 'Tablets', path:'tablets'},
            
          ],
        },
        { name: 'Sports', subcategories: [], path: '/category/sports-accessories' },
        
        { name: 'SkinCare', subcategories: [], path: '/category/skin-care' },
        {
          name: 'Home&Kitchen',
          subcategories: [
            { name: 'Furniture', path: 'furniture' },
            { name: 'Groceries', path: 'groceries' },
            {name: 'Home-Decor', path:'home-decoration'},
            {name: 'Kitchen-Tools', path:'kitchen-accessories'},
           
          ],
        },
        { name: 'Vehicles', subcategories: [], path: '/category/vehicle' },
        
        { name: 'Shop', subcategories: [], path: '/category/all Products' },
        
      ];
  return (
    <div className='flex space-x-6 items-center'>
      {categories.map((category, index) => (
        <div className='group relative' key={index}>
            {category.subcategories.length>0?(
                <div className=''>
                    <div className='flex items-center group-hover:underline group-hover:text-pink-700 group-hover:font-semibold '>
                        {category.name} <RiArrowDropDownLine/>
                    </div>

                    <div className='hidden group-hover:flex flex-col bg-slate-200 absolute space-y-2 p-3 w-32 z-40'>
                        {category.subcategories.map((subcategory, subIndex) => (
                            <Link key={subIndex} to={"/category/" + subcategory.path}
                                    className='hover:font-semibold'>{subcategory.name}
                            </Link>
                        ))}
                    </div>
                   
                </div>

                ):(<Link className='hover:underline hover:text-pink-700 hover:font-semibold'
                        to={category.path}>{category.name}</Link>)}

                
        </div>
        
    ))}
    </div>
  )
}

export default SubCategories
