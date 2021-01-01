import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OrdersScreen, {
  screenOptions as ordersScreenOptions,
} from "../../../screens/OrdersScreen";

import { ORDERS_SCREEN_NAME } from "../../../constants/navScreens";

import { OrdersStackNavigatorProp } from "./types";
import defaultScreenOptions from "../../defaultScreenOptions";

const Stack = createStackNavigator();

interface Props {
  navigation: OrdersStackNavigatorProp;
}

const OrdersStackNavigator: React.FC<Props> = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName={ORDERS_SCREEN_NAME}
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name={ORDERS_SCREEN_NAME}
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default OrdersStackNavigator;
