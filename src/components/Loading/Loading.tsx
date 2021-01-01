import React from "react";
import { View, ActivityIndicator } from "react-native";
import colors from "../../assets/colors";
import styles from "./styles";

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loading;
