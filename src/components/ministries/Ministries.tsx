import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import choir from "../../assets/images/choir.png";
import global from "../../assets/images/global.png";
import media from "../../assets/images/media.png";
import children from "../../assets/images/image1.jpg";
import usher from "../../assets/images/usher.png";

const Ministries = () => {


  const ministries = [
    {
      id: 1,
      title: "Global Kingdom Voices",
      image: global,
      description: "Leading in praise through diverse cultural expressions.",
      icon: "🎵",
    },
    {
      id: 2,
      title: "Vibrant Choir",
      image: choir,
      description: "Enhancing worship with powerful harmonies.",
      icon: "🎼",
    },
    {
      id: 3,
      title: "Media Ministry",
      image: media,
      description: "Spreading the word through technology.",
      icon: "📹",
    },
    {
      id: 4,
      title: "Children's Ministry",
      image: children,
      description: "Nurturing young hearts in faith.",
      icon: "👧",
    },
    {
      id: 5,
      title: "Ushers & Greeters",
      image: usher,
      description: "Creating a welcoming environment for all.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="ministries">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif"
          >
            Church Ministries
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Serving God through our unique gifts and talents. Find your place to serve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full text-2xl">
                  {ministry.icon}
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold mb-1">{ministry.title}</h4>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {ministry.description}
                </p>

                <Link 
                  to={`/ministry/${ministry.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
