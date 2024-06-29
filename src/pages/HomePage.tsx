import "../assets/css/index.css";
import AboutUs from "../components/about-us/AboutUs";
// import ContactInfo from "../components/contactUs/ContactInfo";
import Hero from "../components/hero-section/Hero";
import Ministries from "../components/ministries/Ministries";

function ChurchWebsite() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Ministries />
      {/* <ContactInfo /> */}
    </div>
  );
}

export default ChurchWebsite;
