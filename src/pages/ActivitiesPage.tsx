import { motion } from "framer-motion";
import activitiesBg from "../assets/images/activities-bg.png";

const activities = [
  {
    id: 1,
    title: "Sunday School",
    time: "Sundays, 8:00 AM",
    description: "Age-appropriate Bible teaching for children and adults alike. Join us as we dive deep into God's word before the main service.",
    icon: "📖"
  },
  {
    id: 2,
    title: "Mid-Week Service",
    time: "Wednesdays, 6:00 PM",
    description: "A time of fervent prayer and bible study. Recharge your spiritual battery in the middle of the week.",
    icon: "🙏"
  },
  {
    id: 3,
    title: "Choir Rehearsal",
    time: "Saturdays, 4:00 PM",
    description: "Preparing our hearts and voices to lead the congregation in worship. Open to all who love to sing.",
    icon: "🎵"
  },
  {
    id: 4,
    title: "Youth Meeting",
    time: "Fridays, 6:30 PM",
    description: "Dynamic gathering for young people to connect, grow, and have fun in a faith-filled environment.",
    icon: "🔥"
  },
  {
    id: 5,
    title: "Evangelism",
    time: "Last Saturday of Month",
    description: "Taking the gospel to the streets. Fulfilling the Great Commission in our local community.",
    icon: "🌍"
  },
  {
    id: 6,
    title: "Men's Fellowship",
    time: "1st Monday of Month",
    description: "Men strengthening men. Discussions on leadership, family, and faith.",
    icon: "👥"
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ActivitiesPage = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-blue-900 text-white py-20 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${activitiesBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            Church Activities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Join us in fellowship, worship, and service. There's a place for everyone.
          </motion.p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-4 max-w-screen-xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {activities.map((activity) => (
            <motion.div 
              key={activity.id} 
              variants={item}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">
                  {activity.time}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
