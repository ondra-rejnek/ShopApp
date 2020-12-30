import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { OPEN_SANS_BOLD_NAME, OPEN_SANS_NAME } from "../../constants/fontNames";

interface IStyles {
  product: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  price: TextStyle;
  actions: ViewStyle;
  details: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily: OPEN_SANS_BOLD_NAME,
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: OPEN_SANS_NAME,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
});

export default styles;
