import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  partner: [],
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    partnersLoading: (state) => {
      state.loading = true;
    },
    Names: (state, action) => {
      const partnerObj = action.payload.partners;
      // console.log({ partnerObj: partnerObj });
      state.partner = partnerObj;
      state.loading = false; // after async
    },
  },
});

export const { partnersLoading, Names } = partnerSlice.actions;

export default partnerSlice.reducer;
