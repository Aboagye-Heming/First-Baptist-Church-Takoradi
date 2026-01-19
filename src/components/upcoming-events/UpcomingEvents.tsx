import { motion } from "framer-motion";

const events = [
  {
    name: "Sunday Service",
    day: "Sunday",
    time: "9:00 AM",
    description: "Joint Service with inspiring sermons and worship.",
    color: "bg-blue-50 border-blue-200"
  },
  {
    name: "Bible Study",
    day: "Wednesday",
    time: "6:00 PM",
    description: "Delve deep into the scriptures and discussion.",
    color: "bg-amber-50 border-amber-200"
  },
  {
    name: "Prayer Hour",
    day: "Friday",
    time: "6:30 PM",
    description: "A dedicated time for intercession and reflection.",
    color: "bg-purple-50 border-purple-200"
  },
  {
    name: "Youth Fellowship",
    day: "Monday",
    time: "6:00 PM",
    description: "Youth gathering to share and grow in faith.",
    color: "bg-green-50 border-green-200"
  }
];

interface UpcomingEventsProps {
  className?: string;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ className }) => {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="bg-blue-900 text-white p-6 md:p-8">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-3xl">📅</span> 
          Weekly Programs
        </h2>
      </div>
      
      <div className="p-6 md:p-8 space-y-4 overflow-y-auto max-h-[600px] custom-scrollbar">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-5 rounded-xl border-l-4 ${event.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-900 text-lg">{event.name}</h3>
              <span className="text-sm font-semibold bg-white px-2 py-1 rounded text-gray-600 shadow-sm">
                {event.day}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-500 mb-2">{event.time}</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
