import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { ref, update } from "firebase/database";
import { db } from "../FirebaseForNoti";

export default function NotificationScreen() {
  const dispatch = useDispatch();
  const receiveNotification = useSelector(
    (state) => state.data.receiveNotification
  );
  const deviceToken = useSelector((state) => state.data.deviceToken);

  const checkAndSave = () => {
    dispatch(dataActions.setReceiveNotification(!receiveNotification));
    update(ref(db, `/${deviceToken.slice(18, 40)}/obj`), {
      receiveNotification: !receiveNotification,
    });
  };

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
          thumbColor={!receiveNotification ? "white" : colors.primaryLight}
          onValueChange={checkAndSave}
          value={receiveNotification}
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
