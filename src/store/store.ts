// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"; // Optional but recommended for convenience
import { Product } from "../types/product";

interface InitialStateInterface {
  products: Product[];
}

// Define your initial state
const initialState: InitialStateInterface = {
  products: [],
};

// Create a reducer function to handle state updates
const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      console.log("in stores", action.payload);
      return {
        ...state,
        products: [...action.payload],
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// Export the store and type of dispatch for convenience
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
