import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";

interface Props {
  props: any;
}

const CustomHeaderButton: React.FC<Props> = (props) => {
  return (
    <HeaderButton
      title="Cart"
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="white"
    />
  );
};

export default CustomHeaderButton;
