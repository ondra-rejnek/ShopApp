import { rootReducer } from "../stores/ProductsStore/rootReducer";
import {
  CartReducerState,
  OrderReducerState,
  ProductsReducerState,
} from "../stores/ProductsStore/types";

export type RootState = ReturnType<typeof rootReducer>;

export interface IState {
  products: ProductsReducerState;
  cart: CartReducerState;
  orders: OrderReducerState;
}
