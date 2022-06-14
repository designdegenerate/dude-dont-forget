import { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
// import EventCard from "../../components/EventCard";

export default function HomePage() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [partnerName, setPartnerName] = useState("");
  const [toggleEventForm, setToggleEventForm] = useState(false);

  console.log(partnerName);

  return (
    <div className="main-container">
      <div>
        <div className="names">
          <ul>
            <li className="names-button" onClick={() => console.log("Katie")}>
              Katie
            </li>
            <li className="names-button" onClick={() => console.log("Alice")}>
              Alice
            </li>
            <li className="names-button" onClick={() => console.log("Jessica")}>
              Jessica
            </li>
          </ul>
          <div className="add-name">
            {showForm ? (
              <div className="add-name-form">
                <form>
                  <input
                    type="text"
                    placeholder="Name"
                    open={false}
                    className="form-input"
                    onChange={(e) => setPartnerName(e.target.value)}
                  />
                </form>
                <button
                  className="add-name-button"
                  onClick={() => {
                    // dispatch(addNewPartner(partnerName));
                    setShowForm(false);
                  }}
                >
                  Add
                </button>
              </div>
            ) : null}
            <button
              onClick={() => {
                setShowForm(!showForm);
              }}
              className="toggle-add-partner-form"
            >
              {showForm ? "×" : "+"}
            </button>
          </div>
        </div>
        <ul className="details-bar">
          <li
            className="events-facts-button"
            onClick={() => console.log("Events")}
          >
            Events
          </li>
          <li
            className="events-facts-button"
            onClick={() => console.log("Facts")}
          >
            Facts
          </li>
        </ul>
        <div className="events">
          <div className="event-list">
            {/* <EventCard /> */}

            <div className="event-card">Card</div>
            <div className="event-card">Card</div>
            <div className="event-card">Card</div>
          </div>
        </div>
        <button
          className="add-event-button"
          onClick={() => {
            setToggleEventForm(!toggleEventForm);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
