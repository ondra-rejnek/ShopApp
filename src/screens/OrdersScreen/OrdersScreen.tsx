import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem";
import { RootState } from "../../types/rootState";
import * as actions from "../../stores/ProductsStore/actions";
import Loading from "../../components/Loading";

const OrdersScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { orders } = useSelector((state: RootState) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(actions.fetchOrders()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

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
