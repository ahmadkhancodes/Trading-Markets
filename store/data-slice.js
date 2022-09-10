import { createSlice } from "@reduxjs/toolkit";
const initialDataState = {
  allData: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setAllData(state, actions) {
      state.allData = actions.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
