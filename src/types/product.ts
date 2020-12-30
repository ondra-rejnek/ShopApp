import { CartArrayItem } from "../screens/CartScreen/types";

export interface Product {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

export interface CartItem {
  quantity: number;
  productPrice: number;
  productTitle: string;
  sum: number;
}

export interface Order {
  id: string;
  items: CartArrayItem[];
  amount: number;
  date: Date;
  readableDate: string;
}

export interface CartObject {
  [key: string]: CartItem;
}

export interface OrderData {
  items: CartArrayItem[];
  amount: number;
}
