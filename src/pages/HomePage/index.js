import React from "react";
import EventCard from "../../components/EventCard";

import "./styles.css";

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
            <EventCard 
              title="Birthday"
              urlTitle="Buy flowers"
              date="Jan 16"
              missedBy="4 days!"
            
            />
          </div>
        </div>
      </div>
      Welcome to HomePage
    </div>
  );
}
