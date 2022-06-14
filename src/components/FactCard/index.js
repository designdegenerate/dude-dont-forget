import "./style.css";


export default function FactCard(props) {

  return (
    <div className="fact-card">
      <button>×</button>
      <h2>{props.title}</h2>
      <p>{props.details}</p>
    </div>
  );
}
