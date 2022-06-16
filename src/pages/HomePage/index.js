import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import EventCard from "../../components/EventCard";
import EventsForm from "../../components/EventsForm";
import FactForm from "../../components/FactForm";
import FactCard from "../../components/FactCard";

import { selectPartnerId, selectPartners } from "../../store/user/selectors";
import { selectEventOrFact } from "../../store/user/selectors";
import { selectNameById, isEventToggle } from "../../store/user/slice";
import { selectAppLoading } from "../../store/appState/selectors";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import Kanva from "../Kanva";
import { addNewPartner } from "../../store/user/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [partnerName, setPartnerName] = useState("");
  const [toggleEventForm, setToggleEventForm] = useState(false);
  const [toggleFactForm, setToggleFactForm] = useState(false);
  const isEventCurrent = useSelector(selectEventOrFact);

  const partnerList = useSelector(selectPartners);
  const getCurrentPartnerId = useSelector(selectPartnerId);
  const Loading = useSelector(selectAppLoading);

  const submitNewPartner = (e) => {
    e.preventDefault();
    dispatch(addNewPartner(partnerName));
    setShowForm(false);
  };

  return (
    <div className="main-container">
      {Loading ? (
        <h1>LOADING</h1>
      ) : (
        <div style={{ marginBottom: "60px" }}>
          <div className="main-title-div">
            <h1 className="main-title">Dude, don't forget</h1>
          </div>
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
                    <button
                      type="submit"
                      className="add-name-button"
                      onClick={submitNewPartner}
                    >
                      Add
                    </button>
                  </form>
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
                  const flatNow = DateTime.now()
                    .toFormat("yyyy-MM-dd")
                    .toString()
                    .replace(/-/g, "");

                  const eventDate = DateTime.fromISO(event.startDate);
                  const eventDateFlat = eventDate
                    .toFormat("yyyy-MM-dd")
                    .toString()
                    .replace(/-/g, "");

                  const eventDateString = String(event.startDate);

                  const yearRegex = /\d\d\d\d/i;
                  let parsedEventDate;
                  let parsedRelDate;
                  let warning;

                  const thisYear = () => {
                    const mydate = new Date();
                    return mydate.getFullYear().toString();
                  };

                  const nextYear = () => {
                    const mydate = new Date();
                    const year = mydate.getFullYear().toString();
                    const nextyear = parseInt(year) + 1;
                    return nextyear.toString();
                  };

                  const transformEventYear = (year) => {
                    return eventDateString.replace(yearRegex, year());
                  };

                  if (event.interval === "1 year") {
                    if (flatNow > eventDateFlat) {
                      parsedEventDate = transformEventYear(nextYear);
                      const newYear = DateTime.fromISO(parsedEventDate);
                      const draftDate = DateTime.now().diff(newYear, [
                        "days",
                      ]);

                      parsedRelDate = Math.floor(Math.abs(
                        parseFloat(draftDate.values.days)
                      ));
                    } else {
                      parsedEventDate = transformEventYear(thisYear);
                      const newDate = DateTime.fromISO(parsedEventDate);
                      const draftDate = DateTime.now().diff(newDate, ["days"]);

                      parsedRelDate = Math.floor(Math.abs(
                        parseFloat(draftDate.values.days)
                      ));
                    }
                  }

                  if (event.interval !== "1 year") {
                    const change = DateTime.now().diff(eventDate, ["days"]);

                    let interval = 0;

                    if (event.interval === "1 month") {
                      interval = 30;
                    }

                    if (event.interval === "3 months") {
                      interval = 60;
                    }

                    if (event.interval === "6 months") {
                      interval = 180;
                    }

                    console.log(interval);
                    console.log(parseFloat(change.values.days));

                    const delta = parseFloat(change.values.days) / parseFloat(interval) + 1;

                    // parsedEventDate = 
                    console.log(DateTime.fromISO(event.startDate).plus({ days: delta }));
                      // .plus({ days: delta })
                      console.log(parsedEventDate);
                  }

                  // const thisYeareventDate = eventDate.

                  // // console.log(now);
                  // console.log(eventDate);

                  /* Logic

                  if interval is 1 year:

                  set birthday as this year.
                  now - eventDate, 
                    if num is positive
                      then, birthday has happened,
                        set bday to be next year
                        parse date as in x months, x day.

                    if num is negative
                      bday coming up
                        keep bday as coming up
                          parse time diff
                          if time diff is within range
                            show warning

                  if interval is anything else:

                  delta = (Today - EventStartDate ) / intervalByDays

                  comingUp = eventStartDate + ( [delta + 1] * intervalByDays);

                  */

                  if (parsedRelDate > 7) {
                    warning = "danger";
                  } else if (parsedRelDate > 14) {
                    warning = "warning";
                  }

                  return (
                    <EventCard
                      title={event.title}
                      date={parsedEventDate}
                      relDate={parsedRelDate}
                      warning={warning}
                      id={event.id}
                    />
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
                        <FactCard
                          id={fact.id}
                          title={fact.title}
                          details={fact.details}
                        />
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
                setToggleFactForm(!toggleFactForm);
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
        <div>
          {
            !toggleEventForm ? (
              ""
            ) : (
              <EventsForm
                close={() => setToggleEventForm(false)}
                partnerId={getCurrentPartnerId}
              />
            ) /* <EventsForm /> */
          }
          {
            !toggleFactForm ? (
              ""
            ) : (
              <FactForm close={() => setToggleFactForm(false)} />
            ) /* <EventsForm /> */
          }
        </div>
      </div>
    </div>
  );
}
