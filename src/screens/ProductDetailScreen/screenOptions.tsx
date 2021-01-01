export const screenOptions = (navData: any) => {
  return {
    title: navData.route.params.product.title,
  };
};

// ({ route }) => ({ title: route.params.product.title })
