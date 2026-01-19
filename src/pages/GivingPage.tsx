import { motion } from "framer-motion";

const GivingPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-blue-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        {/* Abstract shapes or image can go here */}
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-4"
          >
            Giving
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
          >
            "For where your treasure is, there your heart will be also." <br/>
            <span className="text-base mt-2 block opacity-80">- Matthew 6:21</span>
          </motion.p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Why We Give</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Giving is an act of worship and obedience. Your tithes and offerings support 
            the work of the church, helping us spread the gospel, serve our community, 
            and maintain our place of worship. We believe that God blesses a cheerful giver.
          </p>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-12 px-4 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mobile Money Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-yellow-500"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-10 text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                📱
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile Money</h3>
              <p className="text-gray-600 mb-8">Simple and secure transfer via MTN MoMo or Vodafone Cash.</p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">MTN Mobile Money</p>
                  <p className="text-2xl font-bold text-gray-800">024 123 4567</p>
                  <p className="text-sm text-gray-500">Name: First Baptist Church</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 uppercase font-semibold">Vodafone Cash</p>
                  <p className="text-2xl font-bold text-gray-800">020 987 6543</p>
                  <p className="text-sm text-gray-500">Name: First Baptist Church</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bank Transfer Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-blue-600"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-8 md:p-10 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                🏦
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bank Transfer</h3>
              <p className="text-gray-600 mb-8">Direct transfer to our church bank account.</p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-left space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Bank Name:</span>
                  <span className="font-bold text-gray-800">GCB Bank</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Account Name:</span>
                  <span className="font-bold text-gray-800">First Baptist Church</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Account Number:</span>
                  <span className="font-bold text-gray-800">1234567890123</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Branch:</span>
                  <span className="font-bold text-gray-800">Takoradi Main</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default GivingPage;
