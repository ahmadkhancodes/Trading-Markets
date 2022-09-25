import React from "react";
import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import colors from "./assets/colors";
import store from "./store/index";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Contact from "./screens/Contact";
import Info from "./screens/Info";
import Legal from "./screens/Legal";
import LegalInfo from "./screens/LegalInfo";
import Home from "./screens/Home";
import NotificationScreen from "./screens/NotificationScreen";
import SignalsScreen from "./screens/SignalsScreen";
import Social from "./screens/Social";
import { set, ref, onValue } from "firebase/database";
import { db } from "./firebase";
import { db as db2 } from "./FirebaseForNoti";
import { dataActions } from "./store/data-slice";
import { Provider, useDispatch } from "react-redux";
import * as Notifications from "expo-notifications";
import { isDevice } from "expo-device";
import { LogBox } from "react-native";
import AppText from "./components/AppText";
import Donation from "./screens/Donation";
import StartupDisclaimer from "./screens/StartupDisclaimer";
import Name from "./screens/Name";
LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();

function App({ initialScreen, token }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onValue(ref(db, "DATA_FROM_STORE"), (snapshot) => {
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
    onValue(ref(db, "DISCLAIMER"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch(dataActions.setDisclaimer(data["DISCLAIMER"]));
      }
    });
    onValue(ref(db, "DONATION"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch(dataActions.setDonation(data["DONATION"]));
      }
    });
    onValue(ref(db, "SOCIAL"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch(dataActions.setSocial(data["SOCIAL"]));
      }
    });
    onValue(ref(db, "LEGAL"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch(dataActions.setLegal(data["SOCIAL"]));
        console.log(data["SOCIAL"]);
      }
    });
    dispatch(dataActions.setToken(token));
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialScreen}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Legal"
          component={Legal}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="StartupDisclaimer"
          component={StartupDisclaimer}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="name"
          component={Name}
        />
        <Stack.Screen
          name="LegalInfo"
          options={{
            title: "Legal Information",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
          component={LegalInfo}
        />
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
            title: "Disclaimer",
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
        <Stack.Screen
          options={{
            title: "Social Accounts",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
          name="social"
          component={Social}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  const [initialScreen, setInitialScreen] = React.useState("");
  const [token, setToken] = React.useState("");
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
        setToken(token);
        onValue(ref(db2, `/${token.slice(18, 40)}`), (snapshot) => {
          const data = snapshot.val();
          if (data === null) {
            setInitialScreen("Legal");
          } else {
            console.log("IN");
            if (data["obj"]["username"] === "") {
              setInitialScreen("name");
            } else {
              setInitialScreen("home");
            }
          }
        });
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
  getToken();
  if (initialScreen !== "") {
    return (
      <Provider store={store}>
        <App initialScreen={initialScreen} token={token} />
      </Provider>
    );
  } else {
    <ActivityIndicator color={"white"} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
