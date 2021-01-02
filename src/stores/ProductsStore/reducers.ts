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
  const { availableProducts, userProducts } = state;
  const { payload } = action;
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        availableProducts: payload.products,
        userProducts: payload.products.filter(
          (product: Product) => product.id !== payload.pid
        ),
      };
    }

    case CREATE_PRODUCT: {
      const { productData } = payload;
      const newProduct: Product = {
        id: productData.id,
        ownerId: "u1",
        title: productData.title,
        imageUrl: productData.imageUrl,
        description: productData.description,
        price: productData.price,
      };
      return {
        ...state,
        availableProducts: availableProducts.concat(newProduct),
        userProducts: userProducts.concat(newProduct),
      };
    }

    case UPDATE_PRODUCT: {
      const { productData } = payload;
      const productIndex = userProducts.findIndex(
        (prod) => prod.id === payload.pid
      );
      const updatedProduct: Product = {
        id: payload.pid,
        ownerId: userProducts[productIndex].ownerId,
        title: productData.title,
        imageUrl: productData.imageUrl,
        description: productData.description,
        price: userProducts[productIndex].price,
      };
      const updatedUserProducts = [...userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductsIndex = availableProducts.findIndex(
        (prod) => prod.id === payload.pid
      );
      const updatedAvailableProducts = [...availableProducts];
      updatedAvailableProducts[availableProductsIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };
    }

    case DELETE_PRODUCT: {
      return {
        ...state,
        userProducts: userProducts.filter(
          (product) => product.id !== payload.pid
        ),
        availableProducts: availableProducts.filter(
          (product) => product.id !== payload.pid
        ),
      };
    }
  }

  return state;
};

export const cartReducer = (
  state = initialCartState,
  action: ActionType
): CartReducerState => {
  const { items, totalAmount } = state;
  const { payload } = action;
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = payload.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      let updatedOrNewCartItem: CartItem;
      if (items[addedProduct.id]) {
        updatedOrNewCartItem = {
          quantity: items[addedProduct.id].quantity + 1,
          productPrice: prodPrice,
          productTitle: prodTitle,
          sum: items[addedProduct.id].sum + prodPrice,
        };
        return {
          items: { ...items, [addedProduct.id]: updatedOrNewCartItem },
          totalAmount: totalAmount + prodPrice,
        };
      } else {
        updatedOrNewCartItem = {
          quantity: 1,
          productPrice: prodPrice,
          productTitle: prodTitle,
          sum: prodPrice,
        };
        return {
          items: { ...items, [addedProduct.id]: updatedOrNewCartItem },
          totalAmount: totalAmount + prodPrice,
        };
      }

    case REMOVE_FROM_CART:
      const selectedCartItem = items[action.payload.pid];
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
          ...items,
          [payload.pid]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...items };
        delete updatedCartItems[payload.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: totalAmount - selectedCartItem.productPrice,
      };

    case ADD_ORDER:
      return initialCartState;

    case DELETE_PRODUCT:
      if (!items[payload.pid]) {
        return state;
      }
      const updatedItems = { ...items };
      const itemTotal = items[payload.pid].sum;
      delete updatedItems[payload.pid];
      return {
        ...state,
        items: updatedItems,
        totalAmount: totalAmount - itemTotal,
      };
  }
  return state;
};

export const ordersReducer = (
  state = initialOrdersState,
  action: ActionType
): OrderReducerState => {
  const { orders } = state;
  const { payload } = action;
  switch (action.type) {
    case SET_ORDERS:
      return {
        orders: payload.orders,
      };

    case ADD_ORDER:
      const { orderData } = payload;
      const newOrder: Order = {
        id: orderData.id,
        items: orderData.items,
        amount: orderData.amount,
        date: orderData.date,
        readableDate: moment(orderData.date).format("MMMM Do YYYY, hh:mm"),
      };
      return {
        ...state,
        orders: orders.concat(newOrder),
      };
  }

  return state;
};
