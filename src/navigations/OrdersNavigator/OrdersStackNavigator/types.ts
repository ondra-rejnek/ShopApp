import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ORDERS_STACK_NAVIGATOR_NAME } from "../../../constants/navScreens";
import { OrdersNavigatorParamList } from "../../../types/navTypes";

export type OrdersStackNavigatorProp = DrawerNavigationProp<
  OrdersNavigatorParamList,
  typeof ORDERS_STACK_NAVIGATOR_NAME
>;
