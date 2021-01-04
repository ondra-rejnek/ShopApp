import React from "react";
import { CART_SCREEN_NAME } from "../../constants/navScreens";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import { Props as ProductsNavProps } from "./types";
import { StackNavigationOptions } from "@react-navigation/stack";
import { Props as OrdersNavProps } from "../OrdersScreen/types";

type screenOptionsType = ({
  navigation,
}: ProductsNavProps & OrdersNavProps) => StackNavigationOptions;

export const screenOptions: screenOptionsType = ({ navigation }) => {
  return {
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
  };
};
