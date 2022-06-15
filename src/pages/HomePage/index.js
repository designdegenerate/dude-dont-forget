import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import EventsForm from "../../components/Events";
import { manualData } from "../../store/user/slice";
import { selectPartners } from "../../store/user/selectors";

import DATA from "../../data.json";

export default function HomePage() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [partnerName, setPartnerName] = useState("");
  const [toggleEventForm, setToggleEventForm] = useState(false);

  const partnerList = useSelector(selectPartners);

  return (
    <div className="main-container">
      <button onClick={() => dispatch(manualData(DATA))}> Load data</button>
      <div>
        <div className="names">
          <ul>
            {partnerList
              ? partnerList.map((partner) => (
                  <li key={partner.id}>{partner.name}</li>
                ))
              : ""}
            {/* <li className="names-button" onClick={() => console.log("Katie")}>
              Katie
            </li>
            <li className="names-button" onClick={() => console.log("Alice")}>
              Alice
            </li>
            <li className="names-button" onClick={() => console.log("Jessica")}>
              Jessica
            </li> */}
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

      <div>
        <EventsForm />
      </div>
    </div>
  );
}
