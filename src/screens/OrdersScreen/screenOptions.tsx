import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import { Props } from "./types";

type screenOptionsType = ({ navigation }: Props) => StackNavigationOptions;

export const screenOptions: screenOptionsType = ({ navigation }) => {
  return {
    headerTitle: "Your Orders",
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
