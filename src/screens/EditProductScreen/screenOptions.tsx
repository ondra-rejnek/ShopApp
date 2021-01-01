export const screenOptions = (navData: any) => {
  const routeParams = navData.route.params ? navData.route.params : {};
  return {
    title: routeParams.product ? "Edit Product" : "Add Product",
  };
};
