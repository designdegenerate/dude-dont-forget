import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { logOut } from "../../store/user/slice";
import { selectToken } from "../../store/user/selectors";
import { getUserWithStoredToken, logOutUser } from "../../store/user/actions";

import "./styles.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <nav>
      <h1>Dude Don't Forget</h1>
      {!token ? (
        <div>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      ) : (
        <div>
          {/* <Link to="/home">Home</Link> */}
          <button onClick={() => dispatch(logOutUser(navigate))}>Logout</button>
        </div>
      )}
    </nav>
  );
}
