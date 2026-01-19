// src/pages/HomePage.tsx
import { motion, Variants } from "framer-motion";
import "../assets/css/index.css";
import AboutUs from "../components/about-us/AboutUs";
import Hero from "../components/hero-section/Hero";
import Ministries from "../components/ministries/Ministries";
import UpcomingEvents from "../components/upcoming-events/UpcomingEvents";
import VerseOfTheDay from "../components/verse-of-day/VerseOfTheDay";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

function ChurchWebsite() {
  return (
    <main className="font-poppins overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Hero />
      </motion.div>

      {/* About Us Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <AboutUs />
      </motion.section>

      {/* Verse & Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <VerseOfTheDay className="h-full shadow-lg rounded-2xl overflow-hidden bg-white" />
            </motion.div>

            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <UpcomingEvents className="h-full shadow-lg rounded-2xl overflow-hidden bg-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <Ministries />
      </motion.section>
    </main>
  );
}

export default ChurchWebsite;
