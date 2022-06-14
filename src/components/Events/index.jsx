import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

const EventsForm = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState(
    "Give Flowers",
    "Send chocolate",
    "Birthday",
    "Valentine's",
    "Anniversary"
  );
  const [date, setDate] = useState();
  const [delta, setDelta] = useState(
    "1 month",
    "3 months",
    "6 monthts",
    "1 year"
  );

  //   const token = useSelector();

  //   if (!token) return null;

  function submitForm(event) {
    event.preventDefault();

    //  dispatch(sendEvent(type, ,date,delta));

    setType("");
    setDate("");
    setDelta("");
  }

  return (
    <form>
      <div className="form-style-4">
        <div>
          <h2>Create Event</h2>
          <div className="card">
            <div className="card-body">
              <label for="type">
                <strong>Type</strong>
              </label>
              <select id="type" name="type">
                <option value="Give Flowers">Give Flowers</option>
                <option value="Send chocolate">Buy chocolate</option>
                <option value="Birthday">Birthday</option>
                <option value="Valentine's">Valentine's</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            <div>
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
            <div>
              <label for="delta">
                <strong>Reminder</strong>
              </label>
              <select id="delta" name="delta">
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
              </select>
            </div>
            <button className="btn" type="submit" onClick={submitForm}>
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default EventsForm;
