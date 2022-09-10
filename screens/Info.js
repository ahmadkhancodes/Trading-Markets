import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";

export default function Info() {
  return (
    <View style={styles.container}>
      <AppText style={{ fontSize: 15 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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
