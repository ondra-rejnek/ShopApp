import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ADMIN_NAVIGATOR_NAME } from "../../constants/navScreens";
import { OrdersNavigatorParamList } from "../../types/navTypes";

export type AdminNavigatorProp = DrawerNavigationProp<
  OrdersNavigatorParamList,
  typeof ADMIN_NAVIGATOR_NAME
>;
