import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  center: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
