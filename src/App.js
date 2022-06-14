import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MessageBox from "./components/MessageBox";
import Login from "./pages/Login/Login";
import { logOut } from "./store/user/slice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <MessageBox />
      <h1>Dude Don't Forget</h1>
      <div className="AppNav">
        <NavLink to="/home">Home</NavLink>
        <br />
        <br />
        <NavLink to="/login">Login</NavLink>
        <br />
        <br />
        <button onClick={() => dispatch(logOut())}>Logout</button>
      </div>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
