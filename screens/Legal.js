import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import { useSelector } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Legal({ navigation }) {
  var LEGAL = useSelector((state) => state.data.legal);
  return (
    <View style={styles.container}>
      <AppText style={{ fontSize: 20, marginBottom: 15, fontWeight: "bold" }}>
        Legal Statement
      </AppText>
      <ScrollView>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title: "GDPR (EUROPE - General Data Protection Regulation)",
              text: LEGAL.GDPR,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            GDPR (EUROPE - General Data Protection Regulation)
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title: "CCPA (CALIFORNIA - Consumer Privacy Act of 2018)",
              text: LEGAL.CCPA,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            CCPA (CALIFORNIA - Consumer Privacy Act of 2018)
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title:
                "PECR (AMERICA - the Privacy and Electronic Communications Regulations)",
              text: LEGAL.PECR,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            PECR (AMERICA - the Privacy and Electronic Communications
            Regulations)
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title:
                "PIPEDA (CANADA - Personal Information Protection and Electronic Documents Act)",
              text: LEGAL.PIPEDA,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            PIPEDA (CANADA - Personal Information Protection and {"\n"}
            Electronic Documents Act)
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title: "Australia's Privacy Act - (AUSTRALIA)",
              text: LEGAL.AUSTRALIA,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            Australia's Privacy Act - {"\n"}(AUSTRALIA)
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title: "Terms and Conditions or Terms of Service",
              text: LEGAL.tos,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            Terms and Conditions or Terms {"\n"} of Service
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title: "Privacy Policy",
              text: LEGAL.pp,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>Privacy Policy</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title:
                "Copyright Infringement Notice (Intellectual Property Policy)",
              text: LEGAL.infringement,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            Copyright Infringement Notice (Intellectual Property Policy)
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title: "Donations, Refund, Return (no refund)",
              text: LEGAL.donations,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            Donations, Refund, Return (no refund)
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            navigation.navigate("LegalInfo", {
              title: "Cookie banner information",
              text: LEGAL.cookie,
            })
          }
        >
          <FontAwesome5
            name="readme"
            size={25}
            color="white"
            style={{ left: 10 }}
          />
          <AppText style={{ fontSize: 15, left: 20 }}>
            Cookie banner information
          </AppText>
        </TouchableOpacity>
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            backgroundColor: "green",
            width: "45%",
            alignItems: "center",
            justifyContent: "center",
            height: 70,
            marginHorizontal: 3,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("StartupDisclaimer")}
        >
          <AppText style={{ fontWeight: "bold" }}>ACCEPT ALL</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            backgroundColor: "red",
            width: "45%",
            alignItems: "center",
            justifyContent: "center",
            height: 70,
            marginHorizontal: 3,
            marginVertical: 10,
          }}
          onPress={() => BackHandler.exitApp()}
        >
          <AppText style={{ fontWeight: "bold" }}>REJECT</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primaryLight,
    width:
      Dimensions.get("screen").width -
      (Dimensions.get("screen").width * 25) / 100,
    height:
      Dimensions.get("screen").height -
      (Dimensions.get("screen").height * 90) / 100,
    marginVertical: 5,
    paddingHorizontal: 4,
  },
});
