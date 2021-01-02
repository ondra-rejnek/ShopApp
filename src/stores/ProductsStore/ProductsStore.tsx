import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { rootReducer } from "./rootReducer";
import ReduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

interface Props {
  children: ReactNode;
}

const ProductsStore: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProductsStore;
