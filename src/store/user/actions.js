import axios from "axios";
import { apiUrl } from "../../config/constants";

import { appDoneLoading, appLoading, setMessage } from "../appState/slice";

import {
  addEvent,
  addPartner,
  loginSuccess,
  logOut,
  tokenStillValid,
} from "./slice";

import { addFact } from "./slice";


import { showMessageWithTimeout } from "../appState/actions";
import { selectToken } from "./selectors";

export const signUp = (name, email, password, nameFriend) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
        nameFriend,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      // console.log({ DATA: response.data });
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
      dispatch(appDoneLoading());
    }
  };
};

export const logOutUser = (navigate) => {
  return async (dispatch, getState) => {
    dispatch(logOut());
    navigate("/login");
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    if (token === null) return;

    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(tokenStillValid({ user: response.data }));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }

      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const sendEvent =
  (title, startDate, interval, partnerId) => async (dispatch, getState) => {
    try {
      const token = selectToken(getState());
      const response = await axios.post(
        `${apiUrl}/events/addNew`,
        {
          title,
          startDate,
          interval,
          partnerId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("response", response);
      dispatch(addEvent(response.data));
    } catch (e) {
      console.log(e);
    }
  };

export const sendFact =
  (title, details, partnerId, userId) => async (dispatch, getState) => {
    try {
      console.log(title, details, partnerId, userId);
      const response = await axios.post(`${apiUrl}/facts/addNew`, {
        title,
        details,
        partnerId,
        userId,
      });

      console.log("response:", response.data);
      dispatch(addEvent(response.data));
    } catch (e) {
      console.log({ error: e.message });
    }
  };

export const sendEmail = (type, date, reminder) => {
  return async (dispatch) => {
    try {
      dispatch(appLoading());

      const response = await axios.post(`${apiUrl}/email`, {
        type,
        date,
        reminder,
      });

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const removeEvent = (eventId) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    try {
      console.log("eventId", eventId);
      const response = await axios.delete(
        `${apiUrl}/events/delete/${eventId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(addEvent(response.data.partners));
    } catch (e) {
      console.log(e);
    }
  };
};

export const removeFact = (factID) => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const response = await axios.delete(`${apiUrl}/facts/delete/${factID}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(addEvent(response.data.partners));
  } catch (e) {
    console.log({ error: e.message });
  }
};


export const addNewPartner = (name) => async (dispatch, getState) => {

  try {
    const token = selectToken(getState());
    const response = await axios.post(
      `${apiUrl}/partners/addNew`,
      { name },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(addPartner(response.data));
  } catch (e) {
    console.log(e);
  }
};
