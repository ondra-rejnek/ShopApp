import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { OPEN_SANS_BOLD_NAME, OPEN_SANS_NAME } from "../../constants/fontNames";

interface IStyles {
  orderItem: ViewStyle;
  summary: ViewStyle;
  totalAmount: TextStyle;
  date: TextStyle;
  detailItems: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  orderItem: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: OPEN_SANS_BOLD_NAME,
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: OPEN_SANS_NAME,
    color: "#888",
  },
  detailItems: {
    width: "100%",
  },
});

export default styles;
