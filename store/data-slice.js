import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  allData: [],
  deviceToken: "",
  allTokens: [],
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
    setToken(state, action) {
      state.deviceToken = action.payload;
    },
    setAllTokens(state, action) {
      state.allTokens = action.payload;
    },
    setSocial(state, actions) {
      state.social = actions.payload;
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
