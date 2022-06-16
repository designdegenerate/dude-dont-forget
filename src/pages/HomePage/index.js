import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import EventCard from "../../components/EventCard";
import EventsForm from "../../components/EventsForm";
import FactCard from "../../components/FactCard";

import { selectPartnerId, selectPartners } from "../../store/user/selectors";
import { selectEventOrFact } from "../../store/user/selectors";
import { selectNameById, isEventToggle } from "../../store/user/slice";

export default function HomePage() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [partnerName, setPartnerName] = useState("");
  const [toggleEventForm, setToggleEventForm] = useState(false);
  const isEventCurrent = useSelector(selectEventOrFact);

  const partnerList = useSelector(selectPartners);
  const getCurrentPartnerId = useSelector(selectPartnerId);

  // const partnerDetails = partnerList.find(
  //   (partner) => partner.id === getCurrentPartnerId
  // );
  console.log(partnerList);

  return (
    <div className="main-container">
      <div>
        <div className="names">
          <ul>
            {partnerList
              ? partnerList.map((partner) => (
                  <li
                    data-selected={
                      getCurrentPartnerId === partner.id ? "true" : ""
                    }
                    key={partner.id}
                    onClick={() => {
                      dispatch(selectNameById(partner.id));
                    }}
                  >
                    {partner.name}
                  </li>
                ))
              : ""}
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
            data-selected={isEventCurrent}
            className="events-facts-button"
            onClick={() => dispatch(isEventToggle(true))}
          >
            Events
          </li>
          <li
            data-selected={!isEventCurrent}
            className="events-facts-button"
            onClick={() => dispatch(isEventToggle(false))}
          >
            Facts
          </li>
        </ul>
        <div className="events">
          {isEventCurrent ? (
            <div className="event-list">
              {partnerList
                ? partnerList[
                    partnerList.findIndex(
                      (partner) => partner.id === getCurrentPartnerId
                    )
                  ].events.map((partner) => {
                    return <EventCard />;
                  })
                : ""}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="fact-list">
          {!isEventCurrent ? (
            <div className="event-list">
              {partnerList
                ? partnerList[
                    partnerList.findIndex(
                      (partner) => partner.id === getCurrentPartnerId
                    )
                  ].facts.map((partner) => {
                    return <FactCard />;
                  })
                : ""}
            </div>
          ) : (
            <></>
          )}
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

      <div>{!toggleEventForm ? "" : <EventsForm /> /* <EventsForm /> */}</div>
    </div>
  );
}
