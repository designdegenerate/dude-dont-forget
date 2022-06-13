import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import partnerReducer from "./partner/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    partner: partnerReducer,
  },
});
