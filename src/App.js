import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MessageBox from "./components/MessageBox";
import Login from "./pages/Login/Login";
import { logOut } from "./store/user/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "./store/user/selectors";
import SignUp from "./pages/SignUp/SignUp";
import { useEffect } from "react";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <MessageBox />
      <h1>Dude Don't Forget</h1>
      <div className="AppNav">
        <NavLink to="/home">Home</NavLink>
        <br />
        <br />
        {!token ? (
          <div>
            <NavLink to="/signup">Sign up</NavLink>
            <br />
            <br />
            <NavLink to="/login">Login</NavLink>
            <br />
            <br />
          </div>
        ) : (
          <button onClick={() => dispatch(logOut())}>Logout</button>
        )}
      </div>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
