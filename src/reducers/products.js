import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_SUCCESFULLY,
  START_GET_PRODUCTS,
  GET_PRODUCTS_SUCCESFULLY
} from "../types";

// Every reducers has own state
const initialState = {
  products: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PRODUCT_SUCCESFULLY:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case CREATE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case START_GET_PRODUCTS:
        return{
          ...state,
          loading: action.payload
        }
      case GET_PRODUCTS_SUCCESFULLY:
        return{
          ...state,
          loading: false,
          products: action.payload
        }
    default:
      return state;
  }
}
