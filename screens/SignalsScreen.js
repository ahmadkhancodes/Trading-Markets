import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";

export default function SignalsScreen() {
  return (
    <View style={styles.container}>
      <Text>SignalsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
});
