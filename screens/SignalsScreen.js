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

  React.useEffect(() => {
    count = 1;
  }, [DATA]);
  return (
    <View style={styles.container}>
      {DATA !== [] ? (
        <>
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
                      paddingHorizontal: item.isactive === "active" ? 5 : 0,
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
                    backgroundColor: "white",
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
                    <AppText style={{ color: "black" }}>Open Price</AppText>
                    <AppText style={{ color: "black" }}>
                      {item.open_price}
                    </AppText>
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
                    <AppText style={{ color: "black" }}>Stop Loss</AppText>
                    <AppText style={{ color: "black" }}>
                      {item.stop_loss}
                    </AppText>
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
                    <AppText style={{ color: "black" }}>Take Profit</AppText>
                    <AppText style={{ color: "black" }}>
                      {item.take_profit}
                    </AppText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingVertical: 7,
                      paddingHorizontal: 3,
                      borderBottomColor: colors.white,
                      borderWidth: 1,
                      display:
                        item.risk_factor_in_points === "" ? "none" : "flex",
                      backgroundColor: "black",
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
                      display:
                        item.recommended_leverage === "" ? "none" : "flex",
                      backgroundColor: "black",
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
                    <AppText style={{ color: "black" }}>Close Price</AppText>
                    <AppText style={{ color: "black" }}>
                      {item.close_price}
                    </AppText>
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
                    <AppText style={{ color: "black" }}>Profit</AppText>
                    <AppText style={{ color: "black" }}>{item.profit}</AppText>
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
                      backgroundColor: "grey",
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
                      backgroundColor: "grey",
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
        </>
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
