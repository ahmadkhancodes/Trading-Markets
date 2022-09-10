import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
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
  });
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
          options={{
            title: "Signals",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
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
