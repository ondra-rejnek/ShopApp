import { combineReducers } from "redux";
import { cartReducer, ordersReducer, productsReducer } from "./reducers";

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
