import "../src/assets/css/App.css";
import AboutUs from "./components/AboutUs";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";

function ChurchWebsite() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Quotes />

      <section className="services-area py-24" id="services">
        <h3 className="section-title">
          Our <span>Offers</span>
        </h3>
        <ul className="services-content flex justify-center">
          <li className="w-1/3 px-10">
            <img alt="" src="images/1.jpg" />
            <h4>Prayer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              reprehenderit.
            </p>
          </li>
          <li className="w-1/3 px-10">
            <img alt="" src="images/3.jpg" />
            <h4>Offerings</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              reprehenderit.
            </p>
          </li>
          <li className="w-1/3 px-10">
            <img alt="" src="images/4.jpg" />
            <h4>Blessings</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              reprehenderit.
            </p>
          </li>
        </ul>
      </section>
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default ChurchWebsite;
