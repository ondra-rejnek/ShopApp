import PRODUCTS from "../../data/dummy-data";
import {
  CartReducerState,
  OrderReducerState,
  ProductsReducerState,
} from "./types";

export const initialProductsState: ProductsReducerState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export const initialCartState: CartReducerState = {
  items: {},
  totalAmount: 0,
};

export const initialOrdersState: OrderReducerState = {
  orders: [],
};
