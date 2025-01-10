import React, { useState } from "react";
import { FiGrid, FiPhone } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";

const HomeNavs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const categories = [
    { name: "Home" },
    { name: "Women", hasDropdown: true },
    { name: "Men", hasDropdown: true },
    { name: "Beauty&Fashion", hasDropdown: true },
    { name: "Electronics", hasDropdown: true },
    { name: "Skin Care" },
    { name: "Home&Kitchen", hasDropdown: true },
  ];

  return (
    <nav className=" ">
      <div className="container  mx-auto px-4 lg:px-8">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center py-4">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Browse All Categories Button */}
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              <FiGrid className="mr-2 text-lg" />
              Browse All Categories
            </button>

            {/* Navigation Links */}
            {categories.map((category, index) => (
              <div key={category.name} className="relative">
                <button
                  className={`text-gray-700 hover:text-gray-900 font-medium ${
                    category.hasDropdown ? "flex items-center" : ""
                  }`}
                  onClick={() => {
                    if (category.hasDropdown) toggleDropdown(index);
                  }}
                >
                  {category.name}
                  {category.hasDropdown && (
                    <HiChevronDown className="ml-1 text-gray-500" />
                  )}
                </button>

                {/* Dropdown */}
                {dropdownOpen === index && category.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <FiPhone className="text-2xl text-green-500" />
            <div>
              <span className="text-green-500 font-bold text-lg">1900-888</span>
              <p className="text-sm text-gray-500">24/7 support center</p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex justify-between items-center py-4">
          {/* Browse All Categories Button */}
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600">
            <FiGrid className="mr-2 text-lg" />
            Browse All Categories
          </button>

          {/* Support Section */}
          <FiPhone className="text-2xl text-green-500" />
        </div>

        {/* Mobile Links */}
        <div className="md:hidden">
          <div className="flex flex-wrap items-center justify-between px-4">
            {categories.map((category, index) => (
              <div key={category.name} className="relative w-1/2">
                <button
                  className={`block w-full text-left text-gray-700 hover:text-gray-900 font-medium ${
                    category.hasDropdown ? "flex items-center" : ""
                  }`}
                  onClick={() => {
                    if (category.hasDropdown) toggleDropdown(index);
                  }}
                >
                  {category.name}
                  {category.hasDropdown && (
                    <HiChevronDown className="ml-1 text-gray-500" />
                  )}
                </button>

                {/* Dropdown */}
                {dropdownOpen === index && category.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-md">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavs;
