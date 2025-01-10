import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi";
import { NavLink,Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg'

import { userLoginStatus } from '../Utils/utils'
import { searchproduct } from '../services/searchServices';

import AllCategoriesBtn from "./category navbar/AllCategoriesBtn";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  let [searchSuggestions, setSearchSuggestions]=useState(false)
  let [suggestions,setSuggestions]=useState([])
  let [searchText, setSearchText]=useState("")
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  let userLoggedIn=userLoginStatus()

  function handleLogoutBtn(){
    let trackingId=localStorage.getItem("trackingId")
    localStorage.clear()
    window.location="/"
    localStorage.setItem("trackingId",trackingId)
  }
  const navigate = useNavigate();

  
  function searchProducts() {
    if (searchText.trim()) {
      navigate(`/product-search?keyword=${searchText}`);
      setSearchSuggestions(false);
      setSuggestions([]);
      setSearchText("");
    }
  }
  function getItem(id){
    navigate (`/product/${id}`)
    setSearchSuggestions(false)
    setSuggestions([])
    setSearchText("")
  }

  

  const searchHandler = async (e) => {
    const keyWord = e.target.value;
    setSearchText(keyWord);

    if (keyWord.length > 0) {
      setIsLoading(true); // Show loading spinner
      try {
        const res = await searchproduct({ params: { q: keyWord } });
        setSuggestions(res.data.products || []);
        setSearchSuggestions(true);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false); // Hide loading spinner
      }
    } else {
      setSearchSuggestions(false);
      setSuggestions([]);
    }
  };
  

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/"><img src={logo}  className="w-36"/></Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="flex-1 hidden md:block mx-4">
            <div className="relative w-3/4 mx-auto hover:outline outline-2 outline-[#35ac75] rounded-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md pt-2 pb-2 px-4 text-sm focus:outline-none "
                value={searchText}
                onChange={e=>searchHandler(e)}
              />
              <button onClick={e=>searchProducts()}
              className="absolute bg-[#35ac75] outline outline-1 outline-[#35ac75]  text-white rounded-r-md px-3 pb-3 pt-2 right-0  ">
                <FiSearch className="size={18}" />
              </button>
            </div>
           
            {searchSuggestions== true &&  <div className='absolute bg-white shadow-lg w-1/3 p-3 z-50'>
            
          <ul className='text-sm font-normal'>
            {suggestions.map((product) => (
               <li  className="flex m-3 cursor-pointer" onClick={e=>getItem(product.id)}
                    > {product.title}
               </li>
            ))}
          </ul>
        
        </div>
        }
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            
            
            <NavLink
              to={userLoggedIn? "/cart":"/login"}
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <FiShoppingCart className="mr-1 text-[#35ac75] text-xl" /> Cart
            </NavLink>

            {/* Account Dropdown */}
            <div className='group relative'>  
           <div className="flex text-gray-600"><FiUser className="mr-1 text-[#35ac75] text-xl" /> Account</div>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-40'>
                    {userLoggedIn == true && <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                          <Link className='cursor-pointer  hover:text-black' onClick={(e=>handleLogoutBtn())}>Logout</Link> 
                          <Link to='/orders'className='cursor-pointer hover:text-black'> My Orders</Link> 
                          </div> }
                    
                    {userLoggedIn == false && <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        
                        <Link className='cursor-pointer  hover:text-black' to='/login'>Login</Link>
                        <Link className='cursor-pointer  hover:text-black' to='/signup'>create account</Link>
                       
                    </div>}
           
                </div>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none"
                 onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}>  <FiSearch className="text-xl" />
             </button>
             <NavLink
              to={userLoggedIn? "/cart":"/login"}
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <FiShoppingCart className=" text-xl" /> 
            </NavLink>
             <div className='group relative'>  
           <div className="flex text-gray-600"><FiUser className=" text-xl" /></div>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-40'>
                    {userLoggedIn == true && <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                          <Link className='cursor-pointer  hover:text-black' onClick={(e=>handleLogoutBtn())}>Logout</Link> 
                          <Link to='/orders'className='cursor-pointer hover:text-black'> My Orders</Link> 
                          </div> }
                    
                    {userLoggedIn == false && <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        
                        <Link className='cursor-pointer  hover:text-black' to='/login'>Login</Link>
                        <Link className='cursor-pointer  hover:text-black' to='/signup'>create account</Link>
                       
                    </div>}
           
                </div>
            </div>

             

             
            {/* Menu Icon */}
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>  <FiMenu className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchBarOpen && (
          <div className="block md:hidden bg-gray-100 px-4 py-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border  rounded-full py-2 px-4 text-sm  outline outline-1 outline-[#35ac75]"
                onChange={e=>searchHandler(e)}
              />
              <button className="absolute right-2 top-2 text-gray-600 hover:text-gray-800" onClick={e=>searchProducts()}>
                <FiSearch />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && ( <div><AllCategoriesBtn/>
                               </div>
          
        )}
      </div>
    </nav>
  );
};

export default Navbar;
