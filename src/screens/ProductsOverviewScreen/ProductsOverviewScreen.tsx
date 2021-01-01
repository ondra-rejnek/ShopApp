import React, { useCallback, useEffect, useState } from "react";
import { Button, FlatList, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem";
import { PRODUCT_DETAIL_SCREEN_NAME } from "../../constants/navScreens";
import { RootState } from "../../types/rootState";
import * as actions from "../../stores/ProductsStore/actions";
import { ProductOverviewScreenProp, selectItemHandlerType } from "./types";
import colors from "../../assets/colors";
import Loading from "../../components/Loading";
import styles from "./styles";

interface Props {
  navigation: ProductOverviewScreenProp;
}

const ProductsOverviewScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  const products = useSelector(
    (state: RootState) => state.products.availableProducts
  );

  const dispatch = useDispatch();

  const loadProducts = useCallback(async () => {
    setError(undefined);
    setIsRefreshing(true);
    try {
      await dispatch(actions.fetchProducts());
    } catch (error) {
      setError(error.message);
    }
    setIsRefreshing(false);
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    navigation.addListener("focus", () => loadProducts());
    return () => {
      navigation.removeListener;
    };
  }, [loadProducts]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

  const selectItemHandler: selectItemHandlerType = (item) => {
    navigation.navigate(PRODUCT_DETAIL_SCREEN_NAME, {
      product: item,
    });
  };

  if (error) {
    return (
      <View style={styles.center}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadProducts}
          color={colors.primary}
        />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No products found. Maybe start adding some!</Text>
      </View>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      refreshing={isRefreshing}
      onRefresh={loadProducts}
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
              dispatch(actions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
