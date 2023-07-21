// src/store/products/actions.ts
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/store';
import { Product } from '../types/product';
import { addProduct } from './action';

export const addProductAsync = (
  productData: Product
): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
  try {
    // Make API call to add the product
    const response = await axios.post('https://rgwvhnxr23.execute-api.us-east-1.amazonaws.com/dev/product', productData); // Replace with your API endpoint
    const newProduct: Product = response.data; // Assuming the response returns the newly added product

    // Dispatch action to update the Redux store with the new product
    dispatch(addProduct(newProduct));
  } catch (error) {
    // Handle error if the API request fails
    console.error('Error adding product:', error);
  }
};
