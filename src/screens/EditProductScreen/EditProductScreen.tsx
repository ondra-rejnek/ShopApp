import React, { useCallback, useState } from "react";
import { View, Text, Alert } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/rootState";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import {
  EditProductScreenNavigationProp,
  EditProductScreenRouteProp,
  SubmitHandlerType,
} from "./types";
import * as actions from "../../stores/ProductsStore/actions";
import { USER_PRODUCTS_SCREEN_NAME } from "../../constants/navScreens";

interface Props {
  route: EditProductScreenRouteProp;
  navigation: EditProductScreenNavigationProp;
}

const EditProductScreen: React.FC<Props> = ({ route, navigation }) => {
  const prodId = route.params.product;
  const editedProduct = useSelector((state: RootState) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  const dispatch = useDispatch();

  const submitHandler: SubmitHandlerType = useCallback(() => {
    if (editedProduct) {
      dispatch(actions.updateProduct(prodId, title, description, imageUrl));
    } else {
      dispatch(actions.createProduct(title, description, imageUrl, +price));
    }
    navigation.navigate(USER_PRODUCTS_SCREEN_NAME);
  }, [dispatch, prodId, title, description, imageUrl, price]);

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="md-checkmark"
          onPress={() => {
            submitHandler();
          }}
        ></Item>
      </HeaderButtons>
    ),
  });

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.nativeEvent.text)}
          ></TextInput>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.nativeEvent.text)}
          ></TextInput>
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChange={(e) => setPrice(e.nativeEvent.text)}
            ></TextInput>
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChange={(e) => setDescription(e.nativeEvent.text)}
          ></TextInput>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;
