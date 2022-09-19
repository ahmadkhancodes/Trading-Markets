import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import { useSelector } from "react-redux";

export default function Info() {
  var DISCLAIMER = useSelector((state) => state.data.disclaimer);
  return (
    <View style={styles.container}>
      <AppText
        style={{ fontSize: 20, alignSelf: "flex-start", marginBottom: 15 }}
      >
        Disclaimer
      </AppText>
      <AppText style={{ fontSize: 15 }}>{DISCLAIMER}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
