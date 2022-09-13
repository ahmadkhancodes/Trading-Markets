import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import colors from "../assets/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function sendEmail() {
    setLoading(true);
    var templateParams = {
      name: name,
      message: message,
      email: email,
      phone: phone,
    };
    emailjs
      .send(
        "service_nei0rs3",
        "template_8vkxopd",
        templateParams,
        "l7jcqENuN423_gLO-"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setSuccess(true);
          setEmail("");
          setPhone("");
          setMessage("");
          setName("");
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  }

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Your Name</AppText>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
        onFocus={() => setSuccess(false)}
      />
      <AppText style={styles.text}>Your Email</AppText>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
        placeholder="e.g. abc@xyz.com"
        onFocus={() => setSuccess(false)}
      />
      <AppText style={styles.text}>Your Contact No</AppText>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(value) => setPhone(value)}
        placeholder="e.g. +357"
        onFocus={() => setSuccess(false)}
      />
      <AppText style={styles.text}>Your Message</AppText>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={(value) => setMessage(value)}
        numberOfLines={5}
        onFocus={() => setSuccess(false)}
      />
      <TouchableOpacity
        onPress={sendEmail}
        style={{
          display: success ? "none" : "flex",
          width: "100%",
          backgroundColor: colors.primaryLight,
          paddingVertical: 10,
          marginVertical: 30,
          alignItems: "center",
        }}
        disabled={email == "" || phone == "" || message == "" || name == ""}
      >
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : (
          <AppText
            style={{
              color:
                email == "" || phone == "" || message == "" || name == ""
                  ? "grey"
                  : colors.white,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Submit
          </AppText>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: success ? "flex" : "none",
          width: "100%",
          backgroundColor: success ? "green" : colors.primaryLight,
          paddingVertical: 10,
          marginVertical: 30,
          alignItems: "center",
        }}
        disabled={true}
      >
        <AppText
          style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Submitted
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
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    padding: 5,
    paddingStart: 10,
  },
  text: {
    fontSize: 17,
    marginVertical: 10,
  },
  button: {
    width: "100%",
    backgroundColor: colors.primaryLight,
    paddingVertical: 10,
    marginVertical: 30,
    alignItems: "center",
  },
});
