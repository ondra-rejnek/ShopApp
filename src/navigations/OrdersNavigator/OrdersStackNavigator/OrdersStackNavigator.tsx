import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import OrdersScreen from "../../../screens/OrdersScreen";
import CustomHeaderButton from "../../../components/CustomHeaderButton";
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
        options={{
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
        }}
      />
    </Stack.Navigator>
  );
};

export default OrdersStackNavigator;
