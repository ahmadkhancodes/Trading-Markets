import { createSlice } from "@reduxjs/toolkit";
import { set, ref, push, update } from "firebase/database";
import { db } from "../FirebaseForNoti";

const initialDataState = {
  allData: [],
  deviceToken: "",
  // Token Info Start
  appOpenActivity: null,
  location: "",
  signalScreenAtivity: null,
  dateInstalled: "",
  username: "",
  receiveNotification: false,
  // Token Info End
  disclaimer: "",
  donation: "",
  social: {
    fbpagelink: "",
    fbgrouplink: "",
    instgramlink: "",
    twitterlink: "",
    websitelink: "",
    linkedinlink: "",
    youtubelink: "",
    tiktoklink: "",
  },
  legal: {
    GDPR: "",
    CCPA: "",
    PECR: "",
    PIPEDA: "",
    AUSTRALIA: "",
    tos: "",
    pp: "",
    infringement: "",
    donations: "",
    cookie: "",
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setAllData(state, actions) {
      state.allData = actions.payload;
    },
    setToken(state, action) {
      state.deviceToken = action.payload;
      console.log("Device Token : ", state.deviceToken);
    },
    setReceiveNotification(state, action) {
      state.receiveNotification = action.payload;
    },
    updateReceiveNotification(state) {
      update(ref(db, `/${state.deviceToken.slice(18, 40)}/obj`), {
        receiveNotification: state.receiveNotification,
      });
    },
    setLegal(state, actions) {
      state.legal = actions.payload;
    },
    setAllTokens(state, action) {
      state.allTokens = action.payload;
    },
    setSocial(state, actions) {
      state.social = actions.payload;
    },
    updateUsername(state, actions) {
      state.username = actions.payload;
    },
    setAppOpenActivity(state, actions) {
      state.appOpenActivity = actions.payload;
    },
    setSignalScreenAtivity(state, actions) {
      state.signalScreenAtivity = actions.payload;
    },
    setDateInstalled(state, actions) {
      state.dateInstalled = actions.payload;
    },
    setLocation(state, actions) {
      state.location = actions.payload;
    },
    saveAppActivityToFirebase(state) {
      var curr_date = new Date().toString();
      push(ref(db, `/${state.deviceToken.slice(18, 40)}/obj/appOpenActivity`), {
        curr_date,
      });
    },
    saveSignalActivityToFirebase(state) {
      var curr_date = new Date().toString();
      push(
        ref(db, `/${state.deviceToken.slice(18, 40)}/obj/signalScreenAtivity`),
        {
          curr_date,
        }
      );
    },
    saveAndSetTokenInfoToFirebase(state) {
      set(ref(db, `/${state.deviceToken.slice(18, 40)}`), {
        obj: {
          appOpenActivity: state.appOpenActivity,
          signalScreenAtivity: state.signalScreenAtivity,
          location: state.location,
          dateInstalled: state.dateInstalled,
          username: state.username,
          receiveNotification: state.receiveNotification,
        },
      });
    },
    setDonation(state, actions) {
      state.donation = actions.payload;
    },
    setDisclaimer(state, actions) {
      state.disclaimer = actions.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
