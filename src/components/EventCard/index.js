import "./style.css";

export default function EventCard(props) {
  return (
    <div className="event-card">
      <div className="left-side">
        <button>✓</button>
        <div className="title-url">
          <h2>{props.title}</h2>
          <a href={props.url} target="_blank">
            {props.urlTitle}
          </a>
        </div>
      </div>
      <div className="right-side">
        <div>
          <p>
            <strong>Missed by {props.missedBy}!</strong>
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
