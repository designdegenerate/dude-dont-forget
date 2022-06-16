import "./style.css";


export default function EventCard(props) {

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
    <div className="event-card" data-type={eventType}>
      <div className="left-side">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </button>
        <div className="title-url">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="right-side">
        <div>
          <p>
            {props.missedBy ? (
              <strong>Missed by {props.missedBy}!</strong>
            ) : (
              <strong>in {props.relDate} days</strong>
            )}
          </p>
          <p>{props.date}</p>
        </div>
        <div>
          <button>×</button>
        </div>
      </div>
    </div>
  );
}
