import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  EDIT_PRODUCT_SCREEN_NAME,
  USER_PRODUCTS_SCREEN_NAME,
} from "../../constants/navScreens";
import defaultScreenOptions from "../defaultScreenOptions";
import UserProductsScreen, {
  screenOptions as userProductsScreenOptions,
} from "../../screens/UserProductsScreen";
import { AdminNavigatorProp } from "./types";
import EditProductScreen, {
  screenOptions as editProductScreenOptions,
} from "../../screens/EditProductScreen";
import { AdminNavigatorParamList } from "../../types/navTypes";

const Stack = createStackNavigator<AdminNavigatorParamList>();

interface Props {
  navigation: AdminNavigatorProp;
}

const AdminNavigator: React.FC<Props> = () => {
  return (
    <Stack.Navigator
      initialRouteName={USER_PRODUCTS_SCREEN_NAME}
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name={USER_PRODUCTS_SCREEN_NAME}
        component={UserProductsScreen}
        options={userProductsScreenOptions}
      />
      <Stack.Screen
        name={EDIT_PRODUCT_SCREEN_NAME}
        component={EditProductScreen}
        options={editProductScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
