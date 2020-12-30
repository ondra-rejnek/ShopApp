import { CartObject, Order, OrderData, Product } from "../../types/product";

interface productData {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface updatingProductData {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProductsReducerState {
  availableProducts: Product[];
  userProducts: Product[];
}

export interface CartReducerState {
  items: CartObject;
  totalAmount: number;
}

export interface AddToCartAction {
  type: string;
  product: Product;
}

export interface RemoveFromCartAction {
  type: string;
  pid: string;
}

export interface AddOrderAction {
  type: string;
  orderData: OrderData;
}

export interface DeleteProductAction {
  type: string;
  pid: string;
}

export interface CreateProductAction {
  type: string;
  productData: productData;
}

export interface UpdateProductAction {
  type: string;
  pid: string;
  productData: updatingProductData;
}

export interface OrderReducerState {
  orders: Order[];
}

export type ActionType = AddToCartAction &
  RemoveFromCartAction &
  AddOrderAction &
  DeleteProductAction &
  CreateProductAction &
  UpdateProductAction;
