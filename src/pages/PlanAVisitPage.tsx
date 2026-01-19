import { motion } from "framer-motion";

const PlanAVisitPage = () => {
   const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 py-20 lg:py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
             initial={{ opacity: 0, y: -30 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl font-bold font-serif mb-6"
          >
            Welcome Home
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
          >
            Thinking of visiting us? We'd love to host you! Here's everything you need to know.
          </motion.p>
        </div>
      </section>

      <motion.div 
        className="max-w-screen-xl mx-auto px-4 py-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        
        {/* Service Times Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div variants={item} className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-serif text-blue-900">Service Times</h3>
            <ul className="space-y-3 text-gray-700">
               <li className="flex justify-between font-semibold border-b border-blue-100 pb-2">
                 <span>Sunday School</span>
                 <span>8:00 AM</span>
               </li>
               <li className="flex justify-between font-semibold border-b border-blue-100 pb-2">
                 <span>Main Service</span>
                 <span>9:00 AM</span>
               </li>
               <li className="flex justify-between font-semibold border-b border-blue-100 pb-2">
                 <span>Mid-Week (Wed)</span>
                 <span>6:00 PM</span>
               </li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="bg-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-serif text-green-900">What to Expect</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
               Expect a warm welcome! Our services feature vibrant worship, bible-based teaching, 
               and a friendly atmosphere. Dress code is "come as you are" - from traditional wear to casual.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-serif text-orange-900">For Your Kids</h3>
            <p className="text-gray-700 leading-relaxed">
               We have a dedicated Children's Ministry running concurrently with the main service. 
               Safe, fun, and faith-filled classes for all ages, led by trained teachers.
            </p>
          </motion.div>
        </div>

        {/* Location / Map Section */}
        <motion.div variants={item} className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
           <div className="lg:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 font-serif">Finding Us</h2>
              <p className="text-gray-600 mb-6 text-lg">
                We are located in the heart of Takoradi. Our campus is easily accessible 
                by public transport and has ample parking space.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <span className="bg-gray-100 p-2 rounded-full">📍</span>
                    <span className="font-semibold text-gray-800">P.O. Box 456, Takoradi, Ghana</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="bg-gray-100 p-2 rounded-full">📞</span>
                    <span className="font-semibold text-gray-800">+233 24 123 4567</span>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/2 h-80 lg:h-auto bg-gray-200">
             {/* Map Placeholder */}
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2421352508422!2d-1.7560953252737543!3d4.899058839906313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77a02875c0001%3A0x84d184b50f5ae025!2sFirst%20Baptist%20Church!5e0!3m2!1sen!2sgh!4v1720458509968!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location"
              ></iframe>
           </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default PlanAVisitPage;
