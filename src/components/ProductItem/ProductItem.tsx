import React, { ReactNode } from "react";
import { View, Text, Image } from "react-native";
import { TouchableNativeFeedback } from "react-native";
import styles from "./styles";

interface Props {
  image: string;
  title: string;
  price: number;
  onSelect: () => void;
  children: ReactNode;
}

const ProductItem: React.FC<Props> = (props) => {
  return (
    <View style={styles.product}>
      <TouchableNativeFeedback onPress={props.onSelect} useForeground>
        <View>
          <Image style={styles.image} source={{ uri: props.image }} />
          <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>{props.children}</View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ProductItem;
