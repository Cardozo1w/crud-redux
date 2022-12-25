import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_SUCCESFULLY,
} from "../types";

import { axiosClient } from "../config/axios";

//Create new products

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(createProduct());

    try {
      await axiosClient.post('/products', product)
      dispatch(createProductSucesfully(product));
    } catch (error) {
      console.log(error)
      dispatch(createProductError(true));
    }
  };
}

const createProduct = () => ({
  type: CREATE_PRODUCT,
});

const createProductSucesfully = (product) => ({
  type: CREATE_PRODUCT_SUCCESFULLY,
  payload: product,
});

const createProductError = (error) => ({
  type: CREATE_PRODUCT_ERROR,
  payload: error,
});
