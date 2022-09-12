import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

export default function NotificationScreen() {
  const dispatch = useDispatch();
  const isEnabled = useSelector((state) => state.data.allowNotifications);
  const toggleSwitch = () => {
    dispatch(dataActions.enableOrDisableNotification(!isEnabled));
    dispatch(dataActions.saveTokenToFirebase());
  };

  React.useEffect(() => {
    dispatch(dataActions.getStatus());
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <AppText style={{ fontSize: 17, fontWeight: "bold" }}>
          Allow Notifications
        </AppText>
        <Switch
          style={{
            marginTop: -12,
            left: 100,
          }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? colors.primaryLight : "white"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
});
