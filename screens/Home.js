import {
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
  Share,
} from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../assets/colors";
import Constants from "expo-constants";

export default function Home({ navigation }) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Checkout this new App, Trading Markets",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={{ fontSize: 30 }}>Welcome to</AppText>
        <AppText style={{ fontSize: 40, fontWeight: "bold", marginBottom: 20 }}>
          Trading Markets
        </AppText>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("signals")}
          style={styles.iconContainer}
        >
          <Image
            style={styles.image}
            source={require("../assets/signals.png")}
          />
          <AppText style={{ fontWeight: "bold", fontSize: 17 }}>
            Signals
          </AppText>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("info")}
          style={styles.iconContainer}
        >
          <Image style={styles.image} source={require("../assets/info.png")} />
          <AppText style={{ fontWeight: "bold", fontSize: 17 }}>
            Disclaimer
          </AppText>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("contact")}
          style={styles.iconContainer}
        >
          <Image
            style={styles.image}
            source={require("../assets/contact.png")}
          />
          <AppText style={{ fontWeight: "bold", fontSize: 17 }}>
            Contact Us
          </AppText>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("notification")}
          style={styles.iconContainer}
        >
          <Image
            style={styles.image}
            source={require("../assets/notification.png")}
          />
          <AppText style={{ fontWeight: "bold", fontSize: 17 }}>
            Notifications
          </AppText>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("social")}
          style={styles.iconContainer}
        >
          <Image style={styles.image} source={require("../assets/share.png")} />
          <AppText style={{ fontWeight: "bold", fontSize: 17 }}>Social</AppText>
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL("https://www.google.com")}
          style={styles.iconContainer}
        >
          <Image
            style={styles.image}
            source={require("../assets/rating.png")}
          />
          <AppText style={{ fontWeight: "bold", fontSize: 17 }}>
            Ratings
          </AppText>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("donate")}
          style={styles.lastContainer}
        >
          <AppText style={{ fontWeight: "bold", fontSize: 17 }}>Donate</AppText>
        </Pressable>
        <Pressable onPress={onShare} style={styles.lastContainer}>
          <AppText style={{ fontWeight: "bold", fontSize: 17 }}>Share</AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignSelf: "flex-start",
  },
  iconContainer: {
    backgroundColor: colors.primaryLight,
    width:
      Dimensions.get("screen").width -
      (Dimensions.get("screen").width * 60) / 100,
    height:
      Dimensions.get("screen").height -
      (Dimensions.get("screen").height * 80) / 100,
    left: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 7,
    marginVertical: 5,
  },
  lastContainer: {
    backgroundColor: colors.primaryLight,
    width:
      Dimensions.get("screen").width -
      (Dimensions.get("screen").width * 60) / 100,
    height:
      Dimensions.get("screen").height -
      (Dimensions.get("screen").height * 95) / 100,
    left: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 7,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});
