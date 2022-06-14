import React from "react";

import "./styles.css";
import EventsForm from "../../components/Events";

export default function HomePage() {
  return (
    <div className="main-container">
      <div>
        <div className="names">
          <ul>
            <li>Katie</li>
            <li>Alice</li>
            <li>Jessica</li>
          </ul>
          <button>Add</button>
        </div>
        <ul className="details-bar">
          <li>Events</li>
          <li>Facts</li>
        </ul>
        <div className="events">
          <button>+</button>
          <div className="event-list">
            <div className="event-card">Card</div>
            <div className="event-card">Card</div>
            <div className="event-card">Card</div>
          </div>
        </div>
      </div>
      Welcome to HomePage
      <div>
        <EventsForm />
      </div>
    </div>
  );
}
