import { CartItem, CartObject, Order } from "../../types/product";
import {
  ADD_ORDER,
  ADD_TO_CART,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  REMOVE_FROM_CART,
  SET_ORDERS,
  SET_PRODUCTS,
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
    case SET_PRODUCTS:
      return {
        availableProducts: action.payload.products,
        userProducts: action.payload.products.filter(
          (product: Product) => product.id !== action.payload.pid
        ),
      };

    case CREATE_PRODUCT:
      const newProduct: Product = {
        id: action.payload.productData.id,
        ownerId: "u1",
        title: action.payload.productData.title,
        imageUrl: action.payload.productData.imageUrl,
        description: action.payload.productData.description,
        price: action.payload.productData.price,
      };
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.availableProducts.concat(newProduct),
      };

    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.payload.pid
      );
      const updatedProduct: Product = {
        id: action.payload.pid,
        ownerId: state.userProducts[productIndex].ownerId,
        title: action.payload.productData.title,
        imageUrl: action.payload.productData.imageUrl,
        description: action.payload.productData.description,
        price: state.userProducts[productIndex].price,
      };
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductsIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.payload.pid
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
          (product) => product.id !== action.payload.pid
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.payload.pid
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
      const addedProduct = action.payload.product;
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
      const selectedCartItem = state.items[action.payload.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems: CartObject;
      if (currentQty > 1) {
        const updatedCartItem: CartItem = {
          quantity: selectedCartItem.quantity - 1,
          productPrice: selectedCartItem.productPrice,
          productTitle: selectedCartItem.productTitle,
          sum: selectedCartItem.sum - selectedCartItem.productPrice,
        };
        updatedCartItems = {
          ...state.items,
          [action.payload.pid]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.payload.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };

    case ADD_ORDER:
      return initialCartState;

    case DELETE_PRODUCT:
      if (!state.items[action.payload.pid]) {
        return state;
      }
      const updatedItems = { ...state.items };
      const itemTotal = state.items[action.payload.pid].sum;
      delete updatedItems[action.payload.pid];
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
    case SET_ORDERS:
      return {
        orders: action.payload.orders,
      };

    case ADD_ORDER:
      const newOrder: Order = {
        id: action.payload.orderData.id,
        items: action.payload.orderData.items,
        amount: action.payload.orderData.amount,
        date: action.payload.orderData.date,
        readableDate: moment(action.payload.orderData.date).format(
          "MMMM Do YYYY, hh:mm"
        ),
      };
      console.log(action.payload.orderData.amount);
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }

  return state;
};
