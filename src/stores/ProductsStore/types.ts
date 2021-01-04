import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "types/rootState";
import { CartObject, Order, Product } from "../../types/product";

// interface productData {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
// }

// interface updatingProductData {
//   title: string;
//   description: string;
//   imageUrl: string;
// }

export interface ProductsReducerState {
  availableProducts: Product[];
  userProducts: Product[];
}

export interface CartReducerState {
  items: CartObject;
  totalAmount: number;
}

export interface OrderReducerState {
  orders: Order[];
}

export interface ActionType {
  type: string;
  payload?: any;
}

export type ActionThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
