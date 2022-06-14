import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Names, partnersLoading } from "./store/partner/slice";
import { getSomeNames } from "./store/partner/actions";
import { selectPartners } from "./store/partner/selectors";

import HomePage from "./pages/HomePage";
import MessageBox from "./components/MessageBox";

function App() {
  const dispatch = useDispatch();
  const isPartnerLoading = useSelector(selectPartners);

  useEffect(() => {
    // console.log("page: but no payload")
    dispatch(getSomeNames);
  }, []);

  return (
    <div className="App">
      <MessageBox />
      <h1>Dude Don't Forget</h1>
      <div className="AppNav">
        <NavLink to="/home">Home</NavLink>
      </div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
