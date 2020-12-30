import { CartArrayItem } from "../../screens/CartScreen/types";
import { Product } from "../../types/product";
import {
  ADD_ORDER,
  ADD_TO_CART,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT,
} from "./actionTypes";
import {
  AddOrderAction,
  AddToCartAction,
  CreateProductAction,
  DeleteProductAction,
  RemoveFromCartAction,
  UpdateProductAction,
} from "./types";

export const addToCart = (product: Product): AddToCartAction => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = (productId: string): RemoveFromCartAction => {
  return { type: REMOVE_FROM_CART, pid: productId };
};

export const addOrder = (
  cartItems: CartArrayItem[],
  totalAmount: number
): AddOrderAction => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amount: totalAmount },
  };
};

export const deleteProduct = (productId: string): DeleteProductAction => {
  return { type: DELETE_PRODUCT, pid: productId };
};

export const createProduct = (
  title: string,
  description: string,
  imageUrl: string,
  price: number
): CreateProductAction => {
  return {
    type: CREATE_PRODUCT,
    productData: {
      title,
      description,
      imageUrl,
      price,
    },
  };
};

export const updateProduct = (
  id: string,
  title: string,
  description: string,
  imageUrl: string
): UpdateProductAction => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      description,
      imageUrl,
    },
  };
};
