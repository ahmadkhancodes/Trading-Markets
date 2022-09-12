import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import { useSelector } from "react-redux";
import AppText from "../components/AppText";

export default function SignalsScreen() {
  var DATA = useSelector((state) => state.data.allData);
  const [index, setIndex] = React.useState();
  const [openStatus, setOpenStatus] = React.useState(false);
  const setOpen = (index) => {
    setOpenStatus(!openStatus);
    setIndex(index);
  };
  var count = 1;
  const formatDate = (d) => {
    var date = new Date(d);
    return (
      date.getFullYear() +
      "-" +
      addZero(date.getMonth() + 1) +
      "-" +
      addZero(date.getDate()) +
      " " +
      addZero(date.getHours()) +
      ":" +
      addZero(date.getMinutes()) +
      ":" +
      addZero(date.getSeconds())
    );
  };
  const addZero = (d) => {
    if (String(d).length === 1) {
      return `0${d}`;
    }
    return d;
  };
  return (
    <View style={styles.container}>
      {DATA !== [] ? (
        <FlatList
          data={DATA.filter((item) => item.ispublished === true)}
          renderItem={({ item }) => (
            <View
              style={{
                marginVertical: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  backgroundColor: item.action === "buy" ? "green" : "red",
                  paddingVertical: 10,
                }}
                onPress={() => setOpen(item.id)}
              >
                <AppText style={{ fontWeight: "bold", right: 40 }}>
                  {count++}) {item.action.toString().toUpperCase()}
                </AppText>
                <AppText>{item.instrument.toString().toUpperCase()}</AppText>
                <AppText
                  style={{
                    backgroundColor:
                      item.isactive === "active" ? "#0f45ba" : "",
                    padding: item.isactive === "active" ? 5 : 0,
                    left: 40,
                  }}
                >
                  {item.isactive.toString().toUpperCase()}
                </AppText>
              </TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.primaryLight,
                  display: index === item.id && openStatus ? "flex" : "none",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display: item.open_price === "" ? "none" : "flex",
                  }}
                >
                  <AppText>Open Price</AppText>
                  <AppText>{item.open_price}</AppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display: item.stop_loss === "" ? "none" : "flex",
                  }}
                >
                  <AppText>Stop Loss</AppText>
                  <AppText>{item.stop_loss}</AppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display: item.take_profit === "" ? "none" : "flex",
                  }}
                >
                  <AppText>Take Profit</AppText>
                  <AppText>{item.take_profit}</AppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display:
                      item.risk_factor_in_points === "" ? "none" : "flex",
                  }}
                >
                  <AppText>Risk factor in points</AppText>
                  <AppText>{item.risk_factor_in_points}</AppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display: item.recommended_leverage === "" ? "none" : "flex",
                  }}
                >
                  <AppText>Recommend Leverage</AppText>
                  <AppText>{item.recommended_leverage}</AppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display: item.close_price === "" ? "none" : "flex",
                  }}
                >
                  <AppText>Close Price</AppText>
                  <AppText>{item.close_price}</AppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display: item.profit === "" ? "none" : "flex",
                  }}
                >
                  <AppText>Profit</AppText>
                  <AppText>{item.profit}</AppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display: item.open_date_and_time === "" ? "none" : "flex",
                  }}
                >
                  <AppText>Open Time</AppText>
                  <AppText>{formatDate(item.open_date_and_time)}</AppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 7,
                    paddingHorizontal: 3,
                    borderBottomColor: colors.primaryLight,
                    borderWidth: 1,
                    display:
                      item.close_date_and_time === "undefined"
                        ? "none"
                        : "flex",
                  }}
                >
                  <AppText>Close Time</AppText>
                  <AppText>{formatDate(item.close_date_and_time)}</AppText>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <ActivityIndicator color={"white"} />
      )}
      <Text style={{ display: "none" }}>{(count = 1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    paddingTop: 10,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
