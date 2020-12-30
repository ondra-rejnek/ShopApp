import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

interface Props {
  children: ReactNode;
}

const ProductsStore = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProductsStore;
