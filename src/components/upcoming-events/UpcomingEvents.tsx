import React from "react";
import "./upcoming-events.css";

const events = [
  {
    name: "Sunday Service",
    day: "Sunday",
    description: "Join us for our Sunday service (Joint Service) with inspiring sermons and worship music.",
  },
  {
    name: "Youth Fellowship",
    day: "Monday",
    description: "A time for the youth to gather, share, and grow in faith.",
  },
  {
    name: "Men's Meeting",
    day: "Tuesday",
    description: "Connect and grow with other men in our community.",
  },
  {
    name: "Bible Study",
    day: "Wednesday",
    description: "Join us for Bible study sessions where we delve deep into the scriptures.",
  },
  {
    name: "Prayer Meeting",
    day: "Thursday",
    description: "Come together in prayer and fellowship.",
  },
  {
    name: "Prayers",
    day: "Friday",
    description: "A dedicated time for prayer and reflection.",
  },
  {
    name: "Singing Rehearsals",
    day: "Saturday",
    description: "Join our choir for singing rehearsals and prepare for Sunday worship.",
  },
];

interface UpcomingEventsProps {
  className?: string;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ className }) => {
  return (
    <div className={`upcoming-events ${className}`}>
      <h2>Upcoming Programs</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event">
            <h3>{event.name}</h3>
            <p><strong>Day:</strong> {event.day}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
