import { View, StyleSheet } from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";

export default function LegalInfo({ route }) {
  const { title, text } = route.params;
  return (
    <View style={styles.container}>
      <AppText style={{ fontSize: 17, marginBottom: 15, fontWeight: "bold" }}>
        {title}
      </AppText>
      <AppText style={{ fontSize: 17 }}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
  },
});
