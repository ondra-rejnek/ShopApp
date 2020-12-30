import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "../../assets/colors";
import { OPEN_SANS_BOLD_NAME } from "../../constants/fontNames";

interface IStyles {
  screen: ViewStyle;
  summary: TextStyle;
  summaryText: TextStyle;
  amount: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: OPEN_SANS_BOLD_NAME,
    fontSize: 18,
  },
  amount: {
    color: colors.primary,
  },
});

export default styles;
