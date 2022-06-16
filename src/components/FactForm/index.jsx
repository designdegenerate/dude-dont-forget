import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendEmail } from "../../store/user/actions";
import { sendFact } from "../../store/user/actions";

import { selectPartnerId } from "../../store/user/selectors";
import { selectUserId } from "../../store/user/selectors";

import "./style.css";

export default function EventsForm(props) {
  const dispatch = useDispatch();
  const partnerId = useSelector(selectPartnerId);
  const userId = useSelector(selectUserId);

  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");

  //   const token = useSelector();

  //   if (!token) return null;

  function submitForm(event) {
    event.preventDefault();

    // dispatch(something(x,y,z));
    // dispatch IN THIS ORDER: description, details, partnerId
    dispatch(sendFact({description, details, partnerId, userId}));
  }

  return (
    <>
      <div className="overlay" onClick={props.close}></div>
      <form>
        <div className="form-style-4">
          <div>
            <h2>Create Info</h2>
            <div className="card">
              <div className="create-event-type-date">
                <div className="create-event-form-divs">
                  <label>
                    <strong>Description</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="some info"
                    value={description}
                    onChange={(event)=>setDescription(event.target.value)}
                    required
                  />
                   <label>
                    <strong>Details</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="some info"
                    value={details}
                    onChange={(event)=>setDetails(event.target.value)}
                    required
                  />
                </div>
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
