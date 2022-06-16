import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail, sendEvent } from "../../store/user/actions";
import "./style.css";

export default function EventsForm(props) {
  const dispatch = useDispatch();

  const [type, setType] = useState("Give Flowers");
  const [date, setDate] = useState("2022-01-01");

  const [interval, setInterval] = useState("1 month");

  //   const token = useSelector();

  //   if (!token) return null;

  function submitForm(event) {
    event.preventDefault();

    dispatch(sendEvent(type, date, interval, props.partnerId));

    setType("");
    setDate("");
    setInterval("");
  }

  return (
    <>
      <div className="overlay" onClick={props.close}></div>
      <form>
        <div className="form-style-4">
          <div>
            <h2>Create Event</h2>
            <div className="card">
              <div className="create-event-type-date">
                <div className="card-body create-event-form-divs">
                  <label for="type">
                    <strong>Type</strong>
                  </label>
                  <select
                    id="type"
                    name="type"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    value={type}
                  >
                    <option value="Give Flowers">Give Flowers</option>
                    <option value="Send chocolate">Buy chocolate</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Valentine's">Valentine's</option>
                    <option value="Anniversary">Anniversary</option>
                  </select>
                </div>
                <div className="create-event-form-divs">
                  <label>
                    <strong>Due Date</strong>
                  </label>
                  <input
                    type="date"
                    placeholder="dd-mm-yyy"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="create-event-form-divs">
                <label for="interval">
                  <strong>Reminder</strong>
                </label>
                <select
                  id="interval"
                  name="interval"
                  onChange={(e) => setInterval(e.target.value)}
                  value={interval}
                >
                  <option value="1 month">1 month</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                </select>
              </div>
              <div className="create-event-form-divs create-event-button">
                <button
                  type="reset"
                  onClick={props.close}
                  className="btn create-event-cancel-btn"
                >
                  Cancel
                </button>
                <button type="submit" onClick={submitForm} className="btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
