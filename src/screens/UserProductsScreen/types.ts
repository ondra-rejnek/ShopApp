import { StackNavigationProp } from "@react-navigation/stack";
import { USER_PRODUCTS_SCREEN_NAME } from "../../constants/navScreens";
import { AdminNavigatorParamList } from "../../types/navTypes";

export type UserProductsScreenProp = StackNavigationProp<
  AdminNavigatorParamList,
  typeof USER_PRODUCTS_SCREEN_NAME
>;

export type EditProductHandlerType = (id: string) => void;

export type DeleteHandlerType = (id: string) => void;
