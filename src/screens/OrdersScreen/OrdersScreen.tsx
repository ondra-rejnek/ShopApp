import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem";
import { RootState } from "../../types/rootState";

const OrdersScreen: React.FC = () => {
  const { orders } = useSelector((state: RootState) => state.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.amount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

export default OrdersScreen;
