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

export interface InputValuesType {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
}

export interface InputValiditiesType {
  [key: string]: boolean;
}

export interface FormReducerStateType {
  inputValues: InputValuesType;
  inputValidities: InputValiditiesType;
  formIsValid: boolean;
}

export type InputChangeHandlerType = (
  inputIdentifier: string,
  inputValue: string,
  inputValidity: boolean
) => void;

export interface FormReducerAction {
  type: string;
  value: string;
  isValid: boolean;
  input: string;
}
