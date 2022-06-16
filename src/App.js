import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import MessageBox from "./components/MessageBox";
import Login from "./pages/Login/Login";
import { logOut } from "./store/user/slice";
import { selectToken } from "./store/user/selectors";
import SignUp from "./pages/SignUp/SignUp";
import { getUserWithStoredToken } from "./store/user/actions";
import NavBar from "./components/NavBar";

function App() {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <MessageBox />
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
