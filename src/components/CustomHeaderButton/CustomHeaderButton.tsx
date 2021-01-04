import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButton,
  HeaderButtonProps,
} from "react-navigation-header-buttons";

interface Props extends HeaderButtonProps {}

const CustomHeaderButton: React.FC<Props> = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="white"
    />
  );
};

export default CustomHeaderButton;
