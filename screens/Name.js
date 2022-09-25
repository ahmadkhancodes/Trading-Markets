import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import React from "react";
import colors from "../assets/colors";
import AppText from "../components/AppText";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import * as Location from "expo-location";

export default function Name({ navigation }) {
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      BackHandler.exitApp();
    }
    let location = await Location.getCurrentPositionAsync({});
    dispatch(dataActions.setLocation(location));
  })();
  const handleSubmit = () => {
    var date = new Date();
    dispatch(dataActions.updateUsername(name));
    dispatch(dataActions.setDateInstalled(date.toString()));
    dispatch(dataActions.saveAndSetTokenInfoToFirebase());
    navigation.navigate("home");
  };
  return (
    <View style={styles.container}>
      <AppText style={{ fontSize: 25, marginBottom: 20, fontWeight: "bold" }}>
        YOUR NAME
      </AppText>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
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
          display: name === "" ? "none" : "flex",
        }}
      >
        <AppText
          style={{
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          START
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    padding: 5,
    paddingStart: 10,
  },
});
