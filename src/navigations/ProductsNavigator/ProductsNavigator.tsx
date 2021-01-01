import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultScreenOptions from "../defaultScreenOptions";
import ProductsOverviewScreen, {
  screenOptions as productsOverviewScreenOptions,
} from "../../screens/ProductsOverviewScreen";
import ProductDetailScreen, {
  screenOptions as productDetailScreenOptions,
} from "../../screens/ProductDetailScreen";
import CartScreen, {
  screenOptions as cartScreenOptions,
} from "../../screens/CartScreen";

import {
  CART_SCREEN_NAME,
  PRODUCT_DETAIL_SCREEN_NAME,
  PRODUCT_OVERVIEW_SCREEN_NAME,
} from "../../constants/navScreens";

import { ProductNavigatorParamList } from "../../types/navTypes";
import { ProductsNavigatorProp } from "./types";

const Stack = createStackNavigator<ProductNavigatorParamList>();

interface Props {
  navigation: ProductsNavigatorProp;
}

const ProductsNavigator: React.FC<Props> = () => {
  return (
    <Stack.Navigator
      initialRouteName={PRODUCT_OVERVIEW_SCREEN_NAME}
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name={PRODUCT_OVERVIEW_SCREEN_NAME}
        component={ProductsOverviewScreen}
        options={productsOverviewScreenOptions}
      />
      <Stack.Screen
        name={PRODUCT_DETAIL_SCREEN_NAME}
        component={ProductDetailScreen}
        options={productDetailScreenOptions}
      />
      <Stack.Screen
        name={CART_SCREEN_NAME}
        component={CartScreen}
        options={cartScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
