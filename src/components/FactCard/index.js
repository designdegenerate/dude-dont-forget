import { useDispatch } from "react-redux";

import "./style.css";

export default function FactCard(props) {
  const dispatch = useDispatch();

  //dispatch(deleteFact(props.id))
  // const deleteOnClick = () =>{
  //   dispatch(deleteFact(props.id))
  // }

  return (
    <div className="fact-card">
      <button className="delete-fact-card-button">×</button>
      <h2>{props.title}</h2>
      <p>{props.details}</p>
    </div>
  );
}
