// src/ChurchWebsite.jsx
import "../assets/css/index.css";
import AboutUs from "../components/about-us/AboutUs";
import Hero from "../components/hero-section/Hero";
import Ministries from "../components/ministries/Ministries";
import UpcomingEvents from "../components/upcoming-events/UpcomingEvents";
import VerseOfTheDay from "../components/verse-of-day/VerseOfTheDay";

function ChurchWebsite() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <div className="flex flex-col md:flex-row md:justify-between md:gap-10  mb-4 max-w-screen-xl mx-auto">
        <VerseOfTheDay className="flex-1" />
        <UpcomingEvents className="flex-1" />
      </div>
      <Ministries />
      {/* <ContactInfo /> */}
    </div>
  );
}

export default ChurchWebsite;
