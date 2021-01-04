import { EDIT_PRODUCT_SCREEN_NAME } from "../../constants/navScreens";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import { StackNavigationOptions } from "@react-navigation/stack";
import { Props as ProductsNavProps } from "./types";
import { Props as OrdersNavProps } from "../OrdersScreen/types";

type screenOptionsType = ({
  navigation,
}: ProductsNavProps & OrdersNavProps) => StackNavigationOptions;

export const screenOptions: screenOptionsType = ({ navigation }) => {
  return {
    headerTitle: "Your Products",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Create"
          iconName="md-create"
          onPress={() => {
            navigation.navigate(EDIT_PRODUCT_SCREEN_NAME, {
              product: "",
            });
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};
