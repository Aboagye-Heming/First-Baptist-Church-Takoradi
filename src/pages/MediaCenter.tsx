import { motion } from "framer-motion";

const sermons = [
  {
    id: 1,
    title: "Walking in Divine Purpose",
    preacher: "Rev. Marklin Agbakey",
    date: "March 10, 2024",
    thumbnail: "bg-blue-900", // placeholder color class
    duration: "45:20"
  },
  {
    id: 2,
    title: "The Power of Unity",
    preacher: "Rev. Marklin Agbakey",
    date: "March 3, 2024",
    thumbnail: "bg-gray-800",
    duration: "52:15"
  },
  {
    id: 3,
    title: "Faith That Moves Mountains",
    preacher: "Guest Speaker",
    date: "February 25, 2024",
    thumbnail: "bg-blue-800",
    duration: "38:45"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

const MediaCenter = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            Media Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Catch up on recent sermons, worship sessions, and special events.
            Grow in your faith wherever you are.
          </motion.p>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-16 px-4 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Latest Sermons</h2>
          <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View Archive &rarr;
          </button>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {sermons.map((sermon) => (
            <motion.div 
              key={sermon.id} 
              variants={item}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              {/* Video Placeholder */}
              <div className={`aspect-video ${sermon.thumbnail} relative flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                 <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                 </div>
                 <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                   {sermon.duration}
                 </span>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{sermon.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-gray-600">{sermon.preacher}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Livestream Banner */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">Join Us Live</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Can't make it in person? Stream our services live every Sunday at 9:00 AM on Facebook and YouTube.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              YouTube
            </button>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              Facebook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaCenter;
