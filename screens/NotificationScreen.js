import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { set, ref } from "firebase/database";
import { db } from "../FirebaseForNoti";

export default function NotificationScreen() {
  const dispatch = useDispatch();
  const allTokens = useSelector((state) => state.data.allTokens);
  const token = useSelector((state) => state.data.deviceToken);
  const [isEnabled, setIsenabled] = React.useState(
    allTokens.find((item) => item === token) ? true : false
  );

  // React.useEffect(() => {
  //   set(ref(db), {
  //     USER_TOKENS: allTokens,
  //   });
  // }, [isEnabled]);

  React.useEffect(() => {
    console.log("All Tokens now : ", allTokens);
    set(ref(db), {
      USER_TOKENS: allTokens,
    });
  }, [isEnabled]);

  const checkAndSave = () => {
    if (!isEnabled) {
      console.log("Radio : ", isEnabled);
      var copy_arr = [...allTokens];
      copy_arr.push(token);
      dispatch(dataActions.setAllTokens(copy_arr));
    } else {
      console.log("Radio : ", isEnabled);
      var copy_arr = [...allTokens];
      copy_arr.splice(copy_arr.indexOf(token), 1);
      dispatch(dataActions.setAllTokens(copy_arr));
    }
    setIsenabled(!isEnabled);
  };

  React.useEffect(() => {
    console.log(token);
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
          onValueChange={checkAndSave}
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
