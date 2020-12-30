import {
  ADMIN_NAVIGATOR_NAME,
  CART_SCREEN_NAME,
  EDIT_PRODUCT_SCREEN_NAME,
  ORDERS_SCREEN_NAME,
  ORDERS_STACK_NAVIGATOR_NAME,
  PRODUCTS_NAVIGATOR_NAME,
  PRODUCT_DETAIL_SCREEN_NAME,
  PRODUCT_OVERVIEW_SCREEN_NAME,
  USER_PRODUCTS_SCREEN_NAME,
} from "../constants/navScreens";
import { Product } from "./product";

export type ProductNavigatorParamList = {
  [PRODUCT_OVERVIEW_SCREEN_NAME]: undefined;
  [PRODUCT_DETAIL_SCREEN_NAME]: { product: Product };
  [CART_SCREEN_NAME]: undefined;
};

export type OrdersNavigatorParamList = {
  [PRODUCTS_NAVIGATOR_NAME]: undefined;
  [ORDERS_STACK_NAVIGATOR_NAME]: undefined;
  [ADMIN_NAVIGATOR_NAME]: undefined;
};

export type OrdersStackNavigatorParamList = {
  [ORDERS_SCREEN_NAME]: undefined;
};

export type AdminNavigatorParamList = {
  [USER_PRODUCTS_SCREEN_NAME]: undefined;
  [EDIT_PRODUCT_SCREEN_NAME]: { product: string };
};
