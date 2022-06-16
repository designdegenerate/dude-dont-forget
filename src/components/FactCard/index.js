import { useDispatch } from "react-redux";
import { removeFact } from "../../store/user/actions";

import "./style.css";

export default function FactCard(props) {
  const dispatch = useDispatch();

  //dispatch(deleteFact(props.id))
  const deleteOnClick = () => {
    dispatch(removeFact(props.id));
  };

  return (
    <div className="fact-card">

      <button className="delete-fact-card-button" onClick={() => deleteOnClick()}>×</button>

      <h2>{props.title}</h2>
      <p>{props.details}</p>
    </div>
  );
}
