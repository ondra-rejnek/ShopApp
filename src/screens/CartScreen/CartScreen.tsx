import React, { useState } from "react";
import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../assets/colors";
import CartItem from "../../components/CartItem";
import { RootState } from "../../types/rootState";
import styles from "./styles";
import { CartArrayItem } from "./types";
import * as actions from "../../stores/ProductsStore/actions";

const CartScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cartTotalAmount = useSelector(
    (state: RootState) => state.cart.totalAmount
  );
  const cartItems = useSelector((state: RootState) => {
    const transformedCartItems: CartArrayItem[] = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  const sendOrderHandler = async () => {
    setIsLoading(true);
    await dispatch(actions.addOrder(cartItems, cartTotalAmount));
    setIsLoading(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>
            ${Math.round((cartTotalAmount * 100) / 100).toFixed(2)}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : (
          <Button
            color={colors.accent}
            title="Order Now"
            disabled={cartItems.length === 0}
            onPress={() => sendOrderHandler()}
          />
        )}
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            deletable={true}
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(actions.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

export default CartScreen;
