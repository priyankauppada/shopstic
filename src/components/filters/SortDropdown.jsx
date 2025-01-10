import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const SortDropdown = () => {
  const { filterState, dispatch } = useContext(FilterContext);

  const handleSortChange = (e) => {
    dispatch({ type: "SET_SORT", payload: e.target.value });
  };

  return (
    <div className="">
     
      <select
        id="sort"
        value={filterState.sort}
        onChange={handleSortChange}
        className="border border-gray-300 text-sm p-2 rounded-md"
      >
        <option value="relevant">Sort by: Relevance</option>
        <option value="priceLowToHigh">Sort by Price: Low to High</option>
        <option value="priceHighToLow">Sort byPrice: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;

