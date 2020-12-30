import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CART_SCREEN_NAME,
  PRODUCT_DETAIL_SCREEN_NAME,
  PRODUCT_OVERVIEW_SCREEN_NAME,
} from "../../constants/navScreens";
import ProductsOverviewScreen from "../../screens/ProductsOverviewScreen";
import ProductDetailScreen from "../../screens/ProductDetailScreen";
import { ProductNavigatorParamList } from "../../types/navTypes";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import CartScreen from "../../screens/CartScreen";
import defaultScreenOptions from "../defaultScreenOptions";
import { ProductsNavigatorProp } from "./types";

const Stack = createStackNavigator<ProductNavigatorParamList>();

interface Props {
  navigation: ProductsNavigatorProp;
}

const ProductsNavigator: React.FC<Props> = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName={PRODUCT_OVERVIEW_SCREEN_NAME}
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name={PRODUCT_OVERVIEW_SCREEN_NAME}
        component={ProductsOverviewScreen}
        options={{
          headerTitle: "All Products",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName="md-cart"
                onPress={() => {
                  navigation.navigate(CART_SCREEN_NAME);
                }}
              ></Item>
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="md-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name={PRODUCT_DETAIL_SCREEN_NAME}
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.product.title })}
      />
      <Stack.Screen
        name={CART_SCREEN_NAME}
        component={CartScreen}
        options={{ title: "Cart" }}
      />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
