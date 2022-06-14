import axios from "axios";

import { partnersLoading, Names } from "./slice";

export const getSomeNames = async (dispatch, getState) => {
  try {
    dispatch(partnersLoading());
    const response = await axios.get("http://localhost:4000/partners/1");
    const data = response.data;
    // console.log("THUNKS data :", data);
    dispatch(Names(data));
  } catch (err) {
    console.log(err.message);
  }
};
