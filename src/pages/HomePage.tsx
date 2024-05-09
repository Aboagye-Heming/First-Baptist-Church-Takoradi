import "../assets/css/index.css";
import AboutUs from "../components/about-us/AboutUs";
import ContactInfo from "../components/contactUs/ContactInfo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Ministries from "../components/Ministries";
import Navbar from "../components/navbar/Navbar";
import Verses from "../components/Verses";

function ChurchWebsite() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Verses />
      <Ministries />

      <ContactInfo />
      <Footer />
    </div>
  );
}

export default ChurchWebsite;