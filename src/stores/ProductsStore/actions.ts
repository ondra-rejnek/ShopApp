import moment from "moment";
import { Action, ActionCreator } from "redux";
import { CartArrayItem } from "../../screens/CartScreen/types";
import { Order, Product } from "../../types/product";
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
import { ActionType } from "./types";

export const addToCart: ActionCreator<Action> = (product: Product) => {
  return { type: ADD_TO_CART, payload: { product: product } };
};

export const removeFromCart: ActionCreator<Action> = (productId: string) => {
  return { type: REMOVE_FROM_CART, payload: { pid: productId } };
};

export const addOrder = (cartItems: CartArrayItem[], totalAmount: number) => {
  return async (dispatch: any) => {
    const date = new Date();
    const response = await fetch(
      "https://shopapp-3c87c-default-rtdb.europe-west1.firebasedatabase.app/orders/u1.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: date.toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      payload: {
        orderData: {
          id: resData.name,
          items: cartItems,
          amount: totalAmount,
          date: date,
        },
      },
    });
  };
};

export const deleteProduct = (productId: string) => {
  return async (dispatch: any) => {
    const response = await fetch(
      `https://shopapp-3c87c-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({ type: DELETE_PRODUCT, payload: { pid: productId } });
  };
};

export const createProduct = (
  title: string,
  description: string,
  imageUrl: string,
  price: number
) => {
  return async (dispatch: any) => {
    const response = await fetch(
      "https://shopapp-3c87c-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          price,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        title,
        description,
        imageUrl,
        price,
      },
    });
  };
};

export const updateProduct = (
  id: string,
  title: string,
  description: string,
  imageUrl: string
) => {
  return async (dispatch: any) => {
    const response = await fetch(
      `https://shopapp-3c87c-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({
      type: UPDATE_PRODUCT,
      payload: {
        pid: id,
        productData: {
          title,
          description,
          imageUrl,
        },
      },
    });
  };
};

export const fetchProducts = () => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(
        "https://shopapp-3c87c-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedProducts: Product[] = [];

      for (const key in resData) {
        loadedProducts.push({
          id: key,
          ownerId: "u1",
          title: resData[key].title,
          imageUrl: resData[key].imageUrl,
          price: resData[key].price,
          description: resData[key].description,
        });
      }

      dispatch({ type: SET_PRODUCTS, payload: { products: loadedProducts } });
    } catch (error) {
      throw error;
    }
  };
};

export const fetchOrders = () => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(
        "https://shopapp-3c87c-default-rtdb.europe-west1.firebasedatabase.app/orders/u1.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedOrders = [];

      for (const key in resData) {
        loadedOrders.push({
          id: key,
          amount: resData[key].totalAmount,
          items: resData[key].cartItems,
          date: resData[key].date,
          readableDate: moment(resData[key].date).format("MMMM Do YYYY, hh:mm"),
        });
      }
      dispatch({ type: SET_ORDERS, payload: { orders: loadedOrders } });
    } catch (error) {
      throw error;
    }
  };
};
