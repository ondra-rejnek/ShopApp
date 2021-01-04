import React, { useState } from "react";
import ProductsStore from "./src/stores/ProductsStore";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { OPEN_SANS_BOLD_NAME, OPEN_SANS_NAME } from "./src/constants/fontNames";
import OrderNavigator from "./src/navigations/OrdersNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    [OPEN_SANS_NAME]: require("./src/assets/fonts/OpenSans-Regular.ttf"),
    [OPEN_SANS_BOLD_NAME]: require("./src/assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err: Error) => {
          console.log(err);
        }}
      />
    );
  }

  return (
    <ProductsStore>
      <OrderNavigator />
    </ProductsStore>
  );
}
