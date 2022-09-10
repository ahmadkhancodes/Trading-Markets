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
        These signals are only for education purpose. We recommend you to use
        our signals on demo account. Data contained in this application is not
        necessarily real-time nor accurate and so prices may not be accurate and
        may differ from the actual market price, meaning prices are indicative
        and not appropriate for trading purposes. Therefore we doesnst bear any
        responsibility for any trading losses you might incur as a result of
        using this data.
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
