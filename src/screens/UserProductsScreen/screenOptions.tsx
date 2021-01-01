import { EDIT_PRODUCT_SCREEN_NAME } from "../../constants/navScreens";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

export const screenOptions = (navData: any) => {
  return {
    headerTitle: "Your Products",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
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
            navData.navigation.navigate(EDIT_PRODUCT_SCREEN_NAME, {
              product: "",
            });
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};
