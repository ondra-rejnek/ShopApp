import { StackNavigationOptions } from "@react-navigation/stack";
import { Props } from "./types";

type screenOptionsType = ({ route }: Props) => StackNavigationOptions;

export const screenOptions: screenOptionsType = ({ route }) => {
  return {
    title: route.params.product.title,
  };
};
