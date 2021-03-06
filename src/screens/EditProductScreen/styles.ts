import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { OPEN_SANS_BOLD_NAME } from "../../constants/fontNames";

interface IStyles {
  formControl: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  form: ViewStyle;
  loader: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: OPEN_SANS_BOLD_NAME,
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
