import { Product } from "../types/product";

// Action type constants
const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";

// Action creators
export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addProduct = (product: Product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
