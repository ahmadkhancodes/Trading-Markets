import React from "react";
import { Text } from "react-native";
import colors from "../assets/colors";

function AppText({ children, style, ...otherprops }) {
  return (
    <Text style={[{ color: colors.white }, style]} {...otherprops}>
      {children}
    </Text>
  );
}

export default AppText;
