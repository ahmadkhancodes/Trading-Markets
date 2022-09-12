import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";

export default function Info() {
  return (
    <View style={styles.container}>
      <AppText
        style={{ fontSize: 20, alignSelf: "flex-start", marginBottom: 15 }}
      >
        Disclaimer
      </AppText>
      <AppText style={{ fontSize: 15 }}>
        Trading Markets signals are for educational purposes only! We recommend
        you to use our signals only on a demo account. If you choose to use
        Trading Markets signals for live trading it is at your own risk. We will
        bear no responsibility for any losses incurred by your actions. Trading
        is highly complex and you may lose more than your initial deposit.
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
});
