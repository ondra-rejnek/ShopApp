import { StackNavigationProp } from "@react-navigation/stack";
import { PRODUCT_OVERVIEW_SCREEN_NAME } from "../../constants/navScreens";
import Product from "../../models/product";
import { ProductNavigatorParamList } from "../../types/navTypes";

export type ProductOverviewScreenProp = StackNavigationProp<
  ProductNavigatorParamList,
  typeof PRODUCT_OVERVIEW_SCREEN_NAME
>;

export type selectItemHandlerType = (item: Product) => void;
