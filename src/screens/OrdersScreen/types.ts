import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  ORDERS_SCREEN_NAME,
  ORDERS_STACK_NAVIGATOR_NAME,
} from "constants/navScreens";
import { OrdersNavigatorParamList } from "types/navTypes";

export type OrdersScreenNavProp = DrawerNavigationProp<
  OrdersNavigatorParamList,
  typeof ORDERS_STACK_NAVIGATOR_NAME
>;

export interface Props {
  navigation: OrdersScreenNavProp;
}
