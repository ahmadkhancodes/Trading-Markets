import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  allData: [],
  deviceToken: "",
  allTokens: [],
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
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
