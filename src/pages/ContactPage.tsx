import { motion } from "framer-motion";
import Contact from "../components/contactUs/ContactInfo";

const ContactPage = () => {
  return (
    <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out with any questions or prayer requests.
          </motion.p>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactPage;
