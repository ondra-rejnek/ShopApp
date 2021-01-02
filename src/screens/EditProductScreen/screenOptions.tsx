import { EditProductScreenRouteProp } from "./types";

interface Props {
  route: EditProductScreenRouteProp;
}

export const screenOptions = ({ route }: Props) => {
  const routeParams = route.params ? route.params : { product: "" };
  return {
    title: routeParams.product ? "Edit Product" : "Add Product",
  };
};
