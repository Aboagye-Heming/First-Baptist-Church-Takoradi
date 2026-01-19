import { motion, Variants } from "framer-motion";
import logo from "../../assets/images/Rev.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutUs = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left: Pastor Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={logo} 
                alt="Reverend Marklin Agbakey" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-semibold border-l-4 border-blue-500 pl-3">
                  Rev. Marklin Agbakey<br/>
                  <span className="text-sm font-normal text-gray-300">Senior Pastor</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-serif">
              <span className="text-blue-600">WELCOME</span> TO FBCT
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <motion.p variants={fadeInUp}>
                Welcome to our loving community, a place where hearts are
                healed, spirits lifted, and souls embraced in the warmth of
                God's love.
              </motion.p>
              <motion.p variants={fadeInUp}>
                In our sanctuary, amidst the solace of fellowship, we find not
                only peace but also guidance, encouragement, and the promise of
                redemption through our Lord Jesus Christ.
              </motion.p>
              <motion.p variants={fadeInUp} className="italic text-gray-800 font-medium border-l-4 border-blue-200 pl-4 py-1">
                "Here, we believe in the divine grace that flows freely,
                enveloping every seeking soul in the boundless embrace of God's
                mercy and compassion."
              </motion.p>
              <motion.p variants={fadeInUp}>
                Our congregation, united in faith and bound by the gospel, is
                dedicated to glorifying His name and spreading the light of His
                love throughout our community.
              </motion.p>
              <motion.p variants={fadeInUp}>
                At the helm of our spiritual journey stands Reverend Marklin
                Agbakey, our esteemed Senior Pastor, a beacon of faith and a
                vessel of God's wisdom and grace. His dedication to the Word and
                fervent prayers illuminate our path, guiding us towards
                spiritual growth and revival.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
