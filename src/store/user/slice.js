import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  namesSelectionId: null, // names is
  isEvent: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    manualData: (state, action) => {
      state.profile = action.payload;

      if (action.payload.partners) {
        state.namesSelectionId = action.payload.partners[0].id;
      }
    },
    selectNameById: (state, action) => {
      state.namesSelectionId = action.payload;
    },
    isEventToggle: (state, action) => {
      state.isEvent = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  manualData,
  selectNameById,
  isEventToggle,
} = userSlice.actions;

export default userSlice.reducer;
