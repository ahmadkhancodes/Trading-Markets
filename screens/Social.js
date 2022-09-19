import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

export default function Social() {
  var SOCIAL = useSelector((state) => state.data.social);
  return (
    <View style={styles.container}>
      <AppText style={{ fontSize: 17, marginBottom: 15 }}>
        Follow or Join Us on These Platforms
      </AppText>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.primaryLight,
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height:
            Dimensions.get("screen").height -
            (Dimensions.get("screen").height * 93) / 100,
          display: SOCIAL.fbpagelink === "" ? "none" : "flex",
          marginVertical: 5,
        }}
        onPress={() => Linking.openURL(SOCIAL.fbpagelink)}
      >
        <AntDesign
          name="facebook-square"
          size={40}
          color="white"
          style={{ left: 10 }}
        />
        <AppText style={{ fontWeight: "bold", fontSize: 17, left: 20 }}>
          Facebook Page Link
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.primaryLight,
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height:
            Dimensions.get("screen").height -
            (Dimensions.get("screen").height * 93) / 100,
          display: SOCIAL.fbgrouplink === "" ? "none" : "flex",
          marginVertical: 5,
        }}
        onPress={() => Linking.openURL(SOCIAL.fbgrouplink)}
      >
        <AntDesign
          name="facebook-square"
          size={40}
          color="white"
          style={{ left: 10 }}
        />
        <AppText style={{ fontWeight: "bold", fontSize: 17, left: 20 }}>
          Facebook Group Link
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#bc2a8d",
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height:
            Dimensions.get("screen").height -
            (Dimensions.get("screen").height * 93) / 100,
          display: SOCIAL.instgramlink === "" ? "none" : "flex",
          marginVertical: 5,
        }}
        onPress={() => Linking.openURL(SOCIAL.instgramlink)}
      >
        <AntDesign
          name="instagram"
          size={40}
          color="white"
          style={{ left: 10 }}
        />
        <AppText style={{ fontWeight: "bold", fontSize: 17, left: 20 }}>
          Instagram Link
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#0072b1",
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height:
            Dimensions.get("screen").height -
            (Dimensions.get("screen").height * 93) / 100,
          display: SOCIAL.linkedinlink === "" ? "none" : "flex",
          marginVertical: 5,
        }}
        onPress={() => Linking.openURL(SOCIAL.linkedinlink)}
      >
        <AntDesign
          name="linkedin-square"
          size={40}
          color="white"
          style={{ left: 10 }}
        />
        <AppText style={{ fontWeight: "bold", fontSize: 17, left: 20 }}>
          LinkedIn Link
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "black",
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height:
            Dimensions.get("screen").height -
            (Dimensions.get("screen").height * 93) / 100,
          display: SOCIAL.tiktoklink === "" ? "none" : "flex",
          marginVertical: 5,
        }}
        onPress={() => Linking.openURL(SOCIAL.tiktoklink)}
      >
        <FontAwesome5
          name="tiktok"
          size={35}
          color="white"
          style={{ left: 15 }}
        />
        <AppText style={{ fontWeight: "bold", fontSize: 17, left: 28 }}>
          TikTok Link
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#00acee",
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height:
            Dimensions.get("screen").height -
            (Dimensions.get("screen").height * 93) / 100,
          display: SOCIAL.twitterlink === "" ? "none" : "flex",
          marginVertical: 5,
        }}
        onPress={() => Linking.openURL(SOCIAL.twitterlink)}
      >
        <AntDesign
          name="twitter"
          size={40}
          color="white"
          style={{ left: 10 }}
        />
        <AppText style={{ fontWeight: "bold", fontSize: 17, left: 20 }}>
          Twitter Link
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.primaryLight,
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height:
            Dimensions.get("screen").height -
            (Dimensions.get("screen").height * 93) / 100,
          display: SOCIAL.websitelink === "" ? "none" : "flex",
          marginVertical: 5,
        }}
        onPress={() => Linking.openURL(SOCIAL.websitelink)}
      >
        <Foundation name="web" size={45} color="white" style={{ left: 15 }} />
        <AppText style={{ fontWeight: "bold", fontSize: 17, left: 28 }}>
          Website Link
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FF0000",
          width:
            Dimensions.get("screen").width -
            (Dimensions.get("screen").width * 25) / 100,
          height:
            Dimensions.get("screen").height -
            (Dimensions.get("screen").height * 93) / 100,
          display: SOCIAL.youtubelink === "" ? "none" : "flex",
          marginVertical: 5,
        }}
        onPress={() => Linking.openURL(SOCIAL.youtubelink)}
      >
        <AntDesign
          name="youtube"
          size={40}
          color="white"
          style={{ left: 10 }}
        />
        <AppText style={{ fontWeight: "bold", fontSize: 17, left: 20 }}>
          YouTube Link
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
