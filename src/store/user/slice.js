import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  partners: [],
  namesSelectionId: null, // names is
  isEvent: true,
};
//test

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.partners = action.payload.user.partners;
      state.namesSelectionId = action.payload.user.partners[0].id;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.partners = [];
      state.namesSelectionId = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.partners = action.payload.user.partners;
      state.namesSelectionId = action.payload.user.partners[0].id;
    },
    selectNameById: (state, action) => {
      state.namesSelectionId = action.payload;
    },
    isEventToggle: (state, action) => {
      state.isEvent = action.payload;
    },

    addEvent: (state, action) => {
      state.partners = action.payload;

    addFact: (state, action) => {
      const { partnerId } = action.payload;
      console.log({ payload: action.payload });
      console.log("partnerId: ", partnerId);
      // console.log({partnerState:state.partners[]})
      // const { title, details, partnerId } = action.payload;
      // state.partners[partnerId].facts = [
      //   ...state.partners[partnerId].facts,
      //   { title: title, details: details },
      // ];

    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  selectNameById,
  isEventToggle,

  addEvent,

  addFact,

} = userSlice.actions;

export default userSlice.reducer;
