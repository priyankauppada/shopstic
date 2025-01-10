import React, { createContext, useReducer, useEffect, act } from "react";
import axios from "axios";

const CartContext = createContext();

// Initial state
const initialCartState = {
  items: [],
  total: 0,
  discountedTotal:0,
  orders: [],
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      const total = action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const discountedTotal = action.payload.reduce((sum, item) => 
        sum +  item.quantity*(item.price - (item.price * item.discountPercentage / 100)), 0);
      return { ...state, items: action.payload, total,discountedTotal };

    case "ADD_ITEM":
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      //console.log(action.payload[0])
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { quantity: item.quantity + 1,  ...item, }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price,
          discountedTotal: state.discountedTotal + action.payload.price,
        };
      }
      return {
        ...state,
        items: [ { ...action.payload, quantity: 1}, ...state.items,],
        total: state.total + action.payload.price,
        discountedTotal: state.discountedTotal + action.payload.price-(action.payload.price*action.payload.discountPercentage/100),
      };

    case "REMOVE_ITEM":
      const filteredItems = state.items.filter((item) => item.id !== action.payload.id);
      const removedItem = state.items.find((item) => item.id === action.payload.id);
      return {
        ...state,
        items: filteredItems,
        total: state.total - removedItem.price * removedItem.quantity,
        discountedTotal:state.discountedTotal- ((removedItem.price-(removedItem.price*removedItemPercentage/100) )* removedItem.quantity),
      };
      case "PLACE_ORDER":
      const newOrder = {
        id: Date.now(), // Unique order ID
        items: state.items,
        total: state.total,
        discountedTotal: state.discountedTotal,
        date: new Date().toLocaleString(),
      };
      return {
        ...state,
        items: [], // Clear cart
        total: 0,
        discountedTotal: 0,
        orders: [...state.orders, newOrder], // Add order to history
      };

    case "UPDATE_QUANTITY":
      const updatedItems = state.items.map((item) =>
        item.id == action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const updatedTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      
      return { ...state, items: updatedItems, total: updatedTotal };

    default:
      return state;
  }
  
};

// Context provider
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  // Fetch cart data from API
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/carts/5");
        dispatch({ type: "SET_CART", payload: response.data.products });
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
