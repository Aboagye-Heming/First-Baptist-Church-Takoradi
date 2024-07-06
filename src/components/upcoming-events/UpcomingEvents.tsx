// src/components/upcoming-events/UpcomingEvents.jsx
import "./upcoming-events.css";

const events = [
  {
    name: "Sunday Service",
    date: "2024-07-10",
    description: "Join us for our weekly Sunday service with inspiring sermons and worship music.",
  },
  {
    name: "Bible Study",
    date: "2024-07-12",
    description: "Dive deep into the scriptures with our weekly Bible study group.",
  },
  {
    name: "Youth Fellowship",
    date: "2024-07-14",
    description: "A time for the youth to gather, share, and grow in faith.",
  },
];

const UpcomingEvents = ({ className }) => {
  return (
    <div className={`upcoming-events ${className}`}>
      <h2>Upcoming Programs</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="event">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
