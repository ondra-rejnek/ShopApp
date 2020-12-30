import { DrawerNavigationProp } from "@react-navigation/drawer";
import { PRODUCTS_NAVIGATOR_NAME } from "../../constants/navScreens";
import { OrdersNavigatorParamList } from "../../types/navTypes";

export type ProductsNavigatorProp = DrawerNavigationProp<
  OrdersNavigatorParamList,
  typeof PRODUCTS_NAVIGATOR_NAME
>;
