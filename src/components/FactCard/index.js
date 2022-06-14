import "./style.css";


export default function FactCard(props) {

  const eventType = props.type === "danger" ? "danger" : props.type === "warning" ? "warning" : ""

  /* Takes the following Props:

  - title: (e.g: birthday)
  - urlTitle: link title that will be shown 
  - url: the actual url
  - date: the exact date, day and month (e.g Jan 16)
  - relDate: the relative date, between today and that date (e.g "3 days from now")
  - missedBy: the amount of time the user missed the event (e.g "missed by 2 days")
  - type: if the event is close, use "warning", if the user missed it, use "danger"

  */

  return (
    <div className="fact-card">
      <button>×</button>
      <h2>{props.title}</h2>
      <p>{props.details}</p>
    </div>
  );
}
