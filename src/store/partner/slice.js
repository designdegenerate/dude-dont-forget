import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partner: [],
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
});

export const {} = partnerSlice.actions;

export default partnerSlice.reducer;
