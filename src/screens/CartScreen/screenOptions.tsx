import { StackNavigationOptions } from "@react-navigation/stack";

type screenOptionsType = () => StackNavigationOptions;

export const screenOptions: screenOptionsType = () => {
  return { title: "Cart" };
};
