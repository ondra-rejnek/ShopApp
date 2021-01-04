import { RouteProp } from "@react-navigation/native";
import { PRODUCT_DETAIL_SCREEN_NAME } from "../../constants/navScreens";
import { ProductNavigatorParamList } from "../../types/navTypes";

export type ProductDetailScreenProp = RouteProp<
  ProductNavigatorParamList,
  typeof PRODUCT_DETAIL_SCREEN_NAME
>;

export interface Props {
  route: ProductDetailScreenProp;
}
