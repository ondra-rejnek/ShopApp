import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  EDIT_PRODUCT_SCREEN_NAME,
  USER_PRODUCTS_SCREEN_NAME,
} from "../../constants/navScreens";
import defaultScreenOptions from "../defaultScreenOptions";
import UserProductsScreen from "../../screens/UserProductsScreen";
import { AdminNavigatorProp } from "./types";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import EditProductScreen from "../../screens/EditProductScreen";
import { AdminNavigatorParamList } from "../../types/navTypes";

const Stack = createStackNavigator<AdminNavigatorParamList>();

interface Props {
  navigation: AdminNavigatorProp;
}

const AdminNavigator: React.FC<Props> = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName={USER_PRODUCTS_SCREEN_NAME}
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name={USER_PRODUCTS_SCREEN_NAME}
        component={UserProductsScreen}
        options={{
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
        }}
      />
      <Stack.Screen
        name={EDIT_PRODUCT_SCREEN_NAME}
        component={EditProductScreen}
        options={({ route }) => ({
          title: route.params.product ? "Edit Product" : "Add Product",
        })}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
