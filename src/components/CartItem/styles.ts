import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { OPEN_SANS_BOLD_NAME, OPEN_SANS_NAME } from "../../constants/fontNames";

interface IStyles {
  cartItem: ViewStyle;
  itemData: ViewStyle;
  quantity: TextStyle;
  mainText: TextStyle;
  deleteButton: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: OPEN_SANS_NAME,
    color: "#888",
    fontSize: 16,
  },
  mainText: {
    fontFamily: OPEN_SANS_BOLD_NAME,
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default styles;
