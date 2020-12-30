import { NavigationProp, RouteProp } from "@react-navigation/native";
import { EDIT_PRODUCT_SCREEN_NAME } from "../../constants/navScreens";
import { AdminNavigatorParamList } from "../../types/navTypes";

export type EditProductScreenRouteProp = RouteProp<
  AdminNavigatorParamList,
  typeof EDIT_PRODUCT_SCREEN_NAME
>;

export type EditProductScreenNavigationProp = NavigationProp<
  AdminNavigatorParamList,
  typeof EDIT_PRODUCT_SCREEN_NAME
>;

export type SubmitHandlerType = () => void;
