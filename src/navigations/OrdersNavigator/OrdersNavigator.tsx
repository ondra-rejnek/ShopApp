import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  ADMIN_NAVIGATOR_NAME,
  ORDERS_STACK_NAVIGATOR_NAME,
  PRODUCTS_NAVIGATOR_NAME,
} from "../../constants/navScreens";
import ProductsNavigator from "../ProductsNavigator";
import OrdersStackNavigator from "./OrdersStackNavigator";
import { OrdersNavigatorParamList } from "../../types/navTypes";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors";
import { OPEN_SANS_BOLD_NAME } from "../../constants/fontNames";
import AdminNavigator from "../AdminNavigator";

const Drawer = createDrawerNavigator<OrdersNavigatorParamList>();

const OrderNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={PRODUCTS_NAVIGATOR_NAME}
        drawerContentOptions={{
          activeTintColor: colors.primary,
          labelStyle: {
            fontFamily: OPEN_SANS_BOLD_NAME,
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen
          name={PRODUCTS_NAVIGATOR_NAME}
          component={ProductsNavigator}
          options={{
            title: "Products",
            drawerIcon: (props) => (
              <Ionicons name="md-cart" size={23} color={props.color} />
            ),
          }}
        />
        <Drawer.Screen
          name={ORDERS_STACK_NAVIGATOR_NAME}
          component={OrdersStackNavigator}
          options={{
            title: "Orders",
            drawerIcon: (props) => (
              <Ionicons name="md-list" size={23} color={props.color} />
            ),
          }}
        />
        <Drawer.Screen
          name={ADMIN_NAVIGATOR_NAME}
          component={AdminNavigator}
          options={{
            title: "Admin",
            drawerIcon: (props) => (
              <Ionicons name="md-create" size={23} color={props.color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default OrderNavigator;
