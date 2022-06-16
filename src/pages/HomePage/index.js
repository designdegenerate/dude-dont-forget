import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import EventCard from "../../components/EventCard";
import EventsForm from "../../components/EventsForm";
import FactCard from "../../components/FactCard";

import { selectPartnerId, selectPartners } from "../../store/user/selectors";
import { selectEventOrFact } from "../../store/user/selectors";
import { selectNameById, isEventToggle } from "../../store/user/slice";
import { selectAppLoading } from "../../store/appState/selectors";
import { useNavigate } from "react-router-dom";
import Kanva from "../Kanva";

export default function HomePage() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [partnerName, setPartnerName] = useState("");
  const [toggleEventForm, setToggleEventForm] = useState(false);
  const isEventCurrent = useSelector(selectEventOrFact);

  const partnerList = useSelector(selectPartners);
  const getCurrentPartnerId = useSelector(selectPartnerId);
  const Loading = useSelector(selectAppLoading);

  return (
    <div className="main-container">
      {Loading ? (
        <h1>LOADING</h1>
      ) : (
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
          <div className="event-list">
            {isEventCurrent ? (
              partnerList.length > 0 ? (
                partnerList[
                  partnerList.findIndex(
                    (partner) => partner.id === getCurrentPartnerId
                  )
                ].events.map((event) => {
                  return (
                    <EventCard title={event.title} date={event.startDate} />
                  );
                })
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
            {}
          </div>
          <div className="fact-list">
            {!isEventCurrent ? (
              <div className="event-list">
                {partnerList.length > 0
                  ? partnerList[
                      partnerList.findIndex(
                        (partner) => partner.id === getCurrentPartnerId
                      )
                    ].facts.map((fact) => {
                      return (
                        <FactCard title={fact.title} details={fact.details} />
                      );
                    })
                  : ""}
              </div>
            ) : (
              <></>
            )}
          </div>
          {isEventCurrent ? (
            <button
              className="add-event-button"
              onClick={() => {
                setToggleEventForm(!toggleEventForm);
              }}
            >
              +
            </button>
          ) : (
            <button
              className="add-event-button"
              onClick={() => {
                setToggleEventForm(!toggleEventForm);
              }}
            >
              +
            </button>
          )}
        </div>
      )}

      <div>{!toggleEventForm ? "" : <EventsForm /> /* <EventsForm /> */}</div>

      <div>
        {" "}
        <Kanva />
      </div>
    </div>
  );
}
