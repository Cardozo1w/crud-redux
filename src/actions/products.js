import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_SUCCESFULLY,
  START_GET_PRODUCTS,
  GET_PRODUCTS_SUCCESFULLY
} from "../types";

import { axiosClient } from "../config/axios";

//Create new products

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(createProduct());

    try {
      await axiosClient.post("/products", product);
      dispatch(createProductSucesfully(product));
    } catch (error) {
      console.log(error);
      dispatch(createProductError(true));
    }
  };
}

export function getProductsAction() {
  return async (dispatch) => {
    dispatch({
      type: START_GET_PRODUCTS,
      payload: true,
    });

    try {
      const {data} = await axiosClient.get('/products')
      dispatch({
        type: GET_PRODUCTS_SUCCESFULLY,
        payload: data
      })
    } catch (error) {
      
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
