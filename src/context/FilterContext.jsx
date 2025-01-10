import React, { createContext, useReducer } from "react";

// Create Context
export const FilterContext = createContext();

// Initial State
const initialFilterState = {
  priceRange: 50000,
  rating: 0,
  primarySort: "relevant", // Primary sorting
  secondarySort: "none", // Default sort
};

// Reducer Function
const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_SORT":
      return { ...state, primarySort: action.payload };
    case "SET_SECONDARY_SORT":
      return { ...state, secondarySort: action.payload };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "CLEAR_FILTERS":
        return initialFilterState;
    default:
      return state;
  }
};

// Filter Context Provider
export const FilterProvider = ({ children }) => {
  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FilterContext.Provider value={{ filterState, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
