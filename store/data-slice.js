import * as Notifications from "expo-notifications";
import { isDevice } from "expo-device";
import { createSlice } from "@reduxjs/toolkit";
import { push, ref, remove, onValue } from "firebase/database";
import { db } from "../FirebaseForNoti";

const initialDataState = {
  allData: [],
  allowNotifications: undefined,
  deviceToken: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setAllData(state, actions) {
      state.allData = actions.payload;
    },
    enableOrDisableNotification(state, actions) {
      state.allowNotifications = actions.payload;
    },
    saveTokenToFirebase(state) {
      const reference = ref(db, "UserTokens");
      if (state.allowNotifications) {
        push(reference, { token: state.deviceToken });
      } else {
        remove(reference, { token: state.deviceToken });
      }
    },
    setToken(state, action) {
      state.deviceToken = action.payload;
      console.log(state.deviceToken);
    },
    getStatus(state) {
      const reference = ref(db, "UserTokens");
      var status = false;
      onValue(
        reference,
        (state.deviceToken,
        (snapshot) => {
          status = snapshot.exists();
        })
      );
      console.log(status);
      state.allowNotifications = status;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
