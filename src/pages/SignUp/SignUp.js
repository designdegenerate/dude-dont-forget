import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

import "../Login/styles.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [nameFriend, setNameFriend] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signUp(name, email, password, nameFriend));
  }

  useEffect(() => {
    if (token !== null) {
      navigate("/home");
    }
  });
  return (
    <div className="login-page">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>"Friend": </label>

        <input
          type="text"
          value={nameFriend}
          onChange={(e) => setNameFriend(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
