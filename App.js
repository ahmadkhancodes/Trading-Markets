import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "./assets/colors";
import store from "./store/index";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Contact from "./screens/Contact";
import Info from "./screens/Info";
import Home from "./screens/Home";
import NotificationScreen from "./screens/NotificationScreen";
import SignalsScreen from "./screens/SignalsScreen";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";
import { dataActions } from "./store/data-slice";
import { Provider, useDispatch } from "react-redux";
import * as Notifications from "expo-notifications";
import { isDevice } from "expo-device";
import { LogBox } from "react-native";
import AppText from "./components/AppText";
import Donation from "./screens/Donation";
LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        var arr = [];
        console.log(data["DATA_FROM_STORE"]);
        for (let i = 0; i < data["DATA_FROM_STORE"].length; i++) {
          arr.push(data["DATA_FROM_STORE"][i]);
        }
        dispatch(dataActions.setAllData(arr));
      }
      console.log("DATA fetched from APP.JS");
    });
    getToken();
    dispatch(dataActions.getStatus());
  });
  async function getToken() {
    try {
      if (isDevice) {
        const { status: existingStatus } =
          await Notifications.requestPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          console.log("Failed to get push token for push notification!");
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        dispatch(dataActions.setToken(token));
      } else {
        console.log("Must use physical device for Push Notifications");
      }
      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
        });
      }
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: "Notification Settings",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
          name="notification"
          component={NotificationScreen}
        />
        <Stack.Screen
          options={{
            title: "Information",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
          name="info"
          component={Info}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Signals",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("donate")}
                style={{
                  backgroundColor: "#f58a42",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  right: 15,
                }}
              >
                <AppText
                  style={{ color: "black", fontWeight: "bold", fontSize: 17 }}
                >
                  Donate
                </AppText>
              </TouchableOpacity>
            ),
          })}
          name="signals"
          component={SignalsScreen}
        />
        <Stack.Screen
          options={{
            title: "Contact Us",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
          name="contact"
          component={Contact}
        />
        <Stack.Screen
          options={{
            title: "Donate",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
          name="donate"
          component={Donation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
