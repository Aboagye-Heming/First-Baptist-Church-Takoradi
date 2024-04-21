import "../src/assets/css/index.css";
import AboutUs from "./components/AboutUs";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Ministries from "./components/Ministries";
import Navbar from "./components/Navbar";
import Verses from "./components/Verses";

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
