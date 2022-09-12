import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";

export default function Donation() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/donate.png")} />
      <AppText style={{ fontSize: 20, marginBottom: 15 }}>
        Show some Love and Donate
      </AppText>
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
  image: {
    width: 100,
    height: 100,
  },
});
