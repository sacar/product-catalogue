import { Product } from '../types/product';

// Action type constants
const SET_PRODUCTS = 'SET_PRODUCTS';

// Action creators
export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});
