import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";

export default function NotificationScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  React.useEffect(() => {
    if (isEnabled) {
      console.log(isEnabled);
    }
  }, [isEnabled]);
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
