import React from "react";
import { FlatList, Button, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../assets/colors";
import ProductItem from "../../components/ProductItem";
import { RootState } from "../../types/rootState";
import * as actions from "../../stores/ProductsStore/actions";
import { EDIT_PRODUCT_SCREEN_NAME } from "../../constants/navScreens";
import {
  DeleteHandlerType,
  EditProductHandlerType,
  UserProductsScreenProp,
} from "./types";

interface Props {
  navigation: UserProductsScreenProp;
}

const UserProductsScreen: React.FC<Props> = ({ navigation }) => {
  const userProducts = useSelector(
    (state: RootState) => state.products.userProducts
  );

  const dispatch = useDispatch();

  const deleteHandler: DeleteHandlerType = (id) => {
    Alert.alert("Are you sure?", "Do you really want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(actions.deleteProduct(id));
        },
      },
    ]);
  };

  const editProductHandler: EditProductHandlerType = (id) => {
    navigation.navigate(EDIT_PRODUCT_SCREEN_NAME, {
      product: id,
    });
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <Button
            color={colors.primary}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={colors.primary}
            title="Delete"
            onPress={() => deleteHandler(itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
