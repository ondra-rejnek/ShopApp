import React from "react";
import { View, Text, ScrollView, Image, Button } from "react-native";
import * as cartActions from "../../stores/ProductsStore/actions";
import { Props } from "./types";
import styles from "./styles";
import colors from "../../assets/colors";
import { useDispatch } from "react-redux";

const ProductDetailScreen: React.FC<Props> = ({ route }) => {
  const { product } = route.params;

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(product));
          }}
        />
      </View>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;
