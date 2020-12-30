import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { OPEN_SANS_BOLD_NAME, OPEN_SANS_NAME } from "../../constants/fontNames";

interface IStyles {
  image: ImageStyle;
  price: TextStyle;
  description: TextStyle;
  actions: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: OPEN_SANS_BOLD_NAME,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: OPEN_SANS_NAME,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default styles;
