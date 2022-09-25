import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

export default function StartupDisclaimer({ navigation }) {
  var DISCLAIMER = useSelector((state) => state.data.disclaimer);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(dataActions.saveAndSetTokenInfoToFirebase());
    navigation.navigate("name");
  };
  return (
    <View style={styles.container}>
      <AppText style={{ fontSize: 25, marginBottom: 20, fontWeight: "bold" }}>
        Disclaimer
      </AppText>
      <AppText style={{ fontSize: 17, textAlign: "center" }}>
        {DISCLAIMER}
      </AppText>
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height: 50,
          backgroundColor: colors.primaryLight,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <AppText
          style={{
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Understood
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 5,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
