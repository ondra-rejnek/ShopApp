import { CartItem, CartObject, Order } from "../../types/product";
import {
  ADD_ORDER,
  ADD_TO_CART,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT,
} from "./actionTypes";
import {
  initialCartState,
  initialOrdersState,
  initialProductsState,
} from "./initialStates";
import {
  ActionType,
  CartReducerState,
  OrderReducerState,
  ProductsReducerState,
} from "./types";
import moment from "moment";
import Product from "../../models/product";

export const productsReducer = (
  state = initialProductsState,
  action: ActionType
): ProductsReducerState => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct: Product = {
        id: new Date().toString(),
        ownerId: "u1",
        title: action.productData.title,
        imageUrl: action.productData.imageUrl,
        description: action.productData.description,
        price: action.productData.price,
      };
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.availableProducts.concat(newProduct),
      };

    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedProduct: Product = {
        id: action.pid,
        ownerId: state.userProducts[productIndex].ownerId,
        title: action.productData.title,
        imageUrl: action.productData.imageUrl,
        description: action.productData.description,
        price: state.userProducts[productIndex].price,
      };
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductsIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductsIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid
        ),
      };
  }

  return state;
};

export const cartReducer = (
  state = initialCartState,
  action: ActionType
): CartReducerState => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      let updatedOrNewCartItem: CartItem;
      if (state.items[addedProduct.id]) {
        updatedOrNewCartItem = {
          quantity: state.items[addedProduct.id].quantity + 1,
          productPrice: prodPrice,
          productTitle: prodTitle,
          sum: state.items[addedProduct.id].sum + prodPrice,
        };
        return {
          items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
          totalAmount: state.totalAmount + prodPrice,
        };
      } else {
        updatedOrNewCartItem = {
          quantity: 1,
          productPrice: prodPrice,
          productTitle: prodTitle,
          sum: prodPrice,
        };
        return {
          items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
          totalAmount: state.totalAmount + prodPrice,
        };
      }

    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems: CartObject;
      if (currentQty > 1) {
        const updatedCartItem: CartItem = {
          quantity: selectedCartItem.quantity - 1,
          productPrice: selectedCartItem.productPrice,
          productTitle: selectedCartItem.productTitle,
          sum: selectedCartItem.sum - selectedCartItem.productPrice,
        };
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };

    case ADD_ORDER:
      return initialCartState;

    case DELETE_PRODUCT:
      if (!state.items[action.pid]) {
        return state;
      }
      const updatedItems = { ...state.items };
      const itemTotal = state.items[action.pid].sum;
      delete updatedItems[action.pid];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - itemTotal,
      };
  }
  return state;
};

export const ordersReducer = (
  state = initialOrdersState,
  action: ActionType
): OrderReducerState => {
  switch (action.type) {
    case ADD_ORDER:
      const actualDate = new Date();
      const newOrder: Order = {
        id: actualDate.toString(),
        items: action.orderData.items,
        amount: action.orderData.amount,
        date: actualDate,
        readableDate: moment(actualDate).format("MMMM Do YYYY, hh:mm"),
      };
      console.log(action.orderData.amount);
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }

  return state;
};
