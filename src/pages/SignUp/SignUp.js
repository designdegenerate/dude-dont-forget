import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signUp(name, email, password));
  }

  useEffect(() => {
    if (token !== null) {
      navigate("/home");
    }
  });
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Sign Up</button>
        </p>
      </form>
    </div>
  );
}
