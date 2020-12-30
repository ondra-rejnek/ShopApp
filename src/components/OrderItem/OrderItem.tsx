import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import colors from "../../assets/colors";
import { CartArrayItem } from "../../screens/CartScreen/types";
import { CartObject } from "../../types/product";
import CartItem from "../CartItem";
import styles from "./styles";

interface Props {
  amount: number;
  date: string;
  items: CartArrayItem[];
}

const OrderItem: React.FC<Props> = ({ amount, date, items }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${amount.toFixed(2)}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        color={colors.primary}
        title={showDetails ? "Hide Details" : "Show Details"}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              title={cartItem.productTitle}
              amount={cartItem.sum}
              deletable={false}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderItem;
