import React from "react";
import { Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem";
import { PRODUCT_DETAIL_SCREEN_NAME } from "../../constants/navScreens";
import { RootState } from "../../types/rootState";
import * as cartActions from "../../stores/ProductsStore/actions";
import { ProductOverviewScreenProp, selectItemHandlerType } from "./types";
import colors from "../../assets/colors";

interface Props {
  navigation: ProductOverviewScreenProp;
}

const ProductsOverviewScreen: React.FC<Props> = ({ navigation }) => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts
  );

  const dispatch = useDispatch();

  const selectItemHandler: selectItemHandlerType = (item) => {
    navigation.navigate(PRODUCT_DETAIL_SCREEN_NAME, {
      product: item,
    });
  };

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => selectItemHandler(itemData.item)}
        >
          <Button
            color={colors.primary}
            title="View Details"
            onPress={() => selectItemHandler(itemData.item)}
          />
          <Button
            color={colors.primary}
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
