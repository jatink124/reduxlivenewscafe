import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],

};

const intialproductState = {
catproducts: [],
};
export const catproductsReducer = (state = intialproductState, { type, payload }) => {

  switch (type) {
    case ActionTypes.SET_PRODUCTS_CAT:
    return { ...state, catproducts: payload };
    default:
      return state;
  }
};

export const productsReducer = (state = intialState, { type, payload }) => {

  switch (type) {
    case ActionTypes.SET_PRODUCTS:
    
    return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
 
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
