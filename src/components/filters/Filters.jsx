import React, { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";

const FilterSidebar = () => {
  


 
  const { filterState, dispatch } = useContext(FilterContext);
  //console.log(filterState)

  const handlePriceChange = (e) => {
    dispatch({ type: "SET_PRICE_RANGE", payload: Number(e.target.value) });
  };

  const handleRatingChange = (rating) => {
    dispatch({ type: "SET_RATING", payload: rating });
  };
 

  const handleSecondarySortChange = (sortOption) => {
    dispatch({ type: "SET_SECONDARY_SORT", payload: sortOption });
  };
  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  return (
    <div className="p-4 text-sm bg-white rounded-md shadow-md w-48 border-e-2 ml-8 ">
      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text- font-semibold mb-1">Filter by Price </h3>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Price Range: Rs {filterState.priceRange}</span>
        </div>
        <input
          type="range"
          min="0"
          max="50000"
          value={filterState.priceRange}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>

      {/* Ratings Filter */}
      <h2 className="font-semibold mt-4">Filter by Ratings </h2>
      <div>
        {[4, 3, 2, 1].map((rating) => (
          <div
            key={rating}
            className="flex items-center cursor-pointer"
            onClick={() => handleRatingChange(rating)}
          >
            <span 
            className={`text-xl ${
              filterState.rating === rating ? "text-green-600" : "text-yellow-600"
            }`}>
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </span>
          </div>
        ))}
      </div>
      <h2 className="font-semibold mb-2 mt-6">Sort by Ratings</h2>
      <div className="flex flex-col">
        <label className="mb-1">
          <input
            type="radio"
            name="secondarySort"
            value="ratingHighToLow"
            checked={filterState.secondarySort === "ratingHighToLow"}
            onChange={() => handleSecondarySortChange("ratingHighToLow")}
            className="mr-2"
          />
          <span className="text-sm text-gray-700">Rating: High to Low</span>
        </label>
        <label className="mb-2">
          <input
            type="radio"
            name="secondarySort"
            value="ratingLowToHigh"
            checked={filterState.secondarySort === "ratingLowToHigh"}
            onChange={() => handleSecondarySortChange("ratingLowToHigh")}
            className="mr-2"
          />
          <span  className="text-sm text-gray-700">Rating: Low to High</span>
        </label>
      </div>
      <button
        onClick={handleClearFilters}
        className="mt-6 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
