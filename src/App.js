import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>Dude Don't Forget</h1>
      <div className="AppNav">
        <NavLink to="/home">Home</NavLink>
      </div>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
