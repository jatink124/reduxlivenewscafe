import { combineReducers } from "redux";
import { catproductsReducer,productsReducer, selectedProductsReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  catallProducts:catproductsReducer,
  product: selectedProductsReducer,
});
console.log(reducers.catallProducts);
export default reducers;
