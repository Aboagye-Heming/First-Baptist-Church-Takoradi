import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import choir from "../../assets/images/choir.png";
import global from "../../assets/images/global.png";
import media from "../../assets/images/media.png";
import children from "../../assets/images/image1.jpg";
import usher from "../../assets/images/usher.png";

const ministries: Record<
  string,
  {
    name: string;
    description: string;
    fullDescription: string;
    leader: string;
    leaderTitle: string;
    contact: string;
    email: string;
    image: string;
    meetingTime: string;
    meetingDay: string;
    location: string;
    responsibilities: string[];
    benefits: string[];
  }
> = {
  "1": {
    name: "Global Kingdom Voices",
    description: "Our international worship team",
    fullDescription:
      "The Global Kingdom Voices Ministry is our international worship team that leads the congregation in praise through diverse cultural expressions of faith. We celebrate the global nature of God's kingdom through music from various traditions and languages.",
    leader: "Jane Doe",
    leaderTitle: "Worship Director",
    contact: "+233 27 774 2296",
    email: "gkv@firstbaptistchurch.com",
    image: global,
    meetingTime: "6:30 PM",
    meetingDay: "Tuesdays",
    location: "Main Sanctuary",
    responsibilities: [
      "Lead worship during Sunday services",
      "Learn and perform songs from various cultural traditions",
      "Participate in special events and concerts",
      "Attend weekly rehearsals",
    ],
    benefits: [
      "Develop musical skills and vocal techniques",
      "Experience diverse worship styles",
      "Build cross-cultural relationships",
      "Grow spiritually through worship",
    ],
  },
  "2": {
    name: "Vibrant Choir",
    description: "Dynamic choir enhancing worship services",
    fullDescription:
      "The Vibrant Choir enhances our worship services with powerful harmonies and inspirational music. Our choir members are dedicated to using their vocal gifts to lead the congregation in heartfelt worship and to create moments of spiritual connection through music.",
    leader: "John Smith",
    leaderTitle: "Choir Director",
    contact: "+233 27 774 2297",
    email: "choir@firstbaptistchurch.com",
    image: choir,
    meetingTime: "5:30 PM",
    meetingDay: "Thursdays",
    location: "Choir Room",
    responsibilities: [
      "Perform during Sunday worship services",
      "Participate in seasonal musical productions",
      "Attend weekly rehearsals",
      "Support special church events with music",
    ],
    benefits: [
      "Vocal training and development",
      "Music theory education",
      "Performance experience",
      "Community fellowship",
    ],
  },
  "3": {
    name: "Media Ministry",
    description: "Technical team spreading God's word",
    fullDescription:
      "The Media Ministry handles all technical aspects of our services, including sound, lighting, video production, and live streaming. Our team ensures that both in-person and online attendees experience seamless, high-quality worship services.",
    leader: "Alice Brown",
    leaderTitle: "Media Director",
    contact: "+233 27 774 2298",
    email: "media@firstbaptistchurch.com",
    image: media,
    meetingTime: "10:00 AM",
    meetingDay: "Saturdays",
    location: "Media Booth",
    responsibilities: [
      "Operate sound equipment during services",
      "Manage live streaming and recording",
      "Control lighting for worship services",
      "Maintain media equipment",
    ],
    benefits: [
      "Technical skills development",
      "Hands-on experience with professional equipment",
      "Serve behind the scenes",
      "Flexible scheduling options",
    ],
  },
  "4": {
    name: "Children's Ministry",
    description: "Nurturing young hearts in faith",
    fullDescription:
      "Our Children's Ministry provides a safe and fun environment for children to learn about God's love. We offer age-appropriate lessons, activities, and worship experiences that help children build a strong foundation of faith and develop relationships with Jesus and each other.",
    leader: "Michael Johnson",
    leaderTitle: "Children's Pastor",
    contact: "+233 27 774 2299",
    email: "children@firstbaptistchurch.com",
    image: children,
    meetingTime: "9:00 AM",
    meetingDay: "Sundays",
    location: "Children's Wing",
    responsibilities: [
      "Teach Sunday School classes",
      "Supervise children during services",
      "Prepare lesson materials",
      "Participate in children's events",
    ],
    benefits: [
      "Make a difference in children's lives",
      "Creative teaching experience",
      "Child development training",
      "Joy of serving the next generation",
    ],
  },
  "5": {
    name: "Ushers & Greeters",
    description: "Creating welcoming environments",
    fullDescription:
      "The Ushers & Greeters Ministry serves as the welcoming face of our church, creating a warm and organized environment for all attendees. Our team ensures that every person who enters our doors feels valued, cared for, and comfortable throughout their worship experience.",
    leader: "Sarah Williams",
    leaderTitle: "Hospitality Director",
    contact: "+233 27 774 2300",
    email: "ushers@firstbaptistchurch.com",
    image: usher,
    meetingTime: "Before services",
    meetingDay: "Sundays",
    location: "Main Entrances",
    responsibilities: [
      "Welcome attendees as they arrive",
      "Distribute worship materials",
      "Assist with seating arrangements",
      "Manage offering collection",
      "Provide directions and information",
    ],
    benefits: [
      "Develop interpersonal skills",
      "First point of contact with visitors",
      "Flexible service commitment",
      "Make everyone feel welcome",
    ],
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function MinistryDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const ministry = ministries[id as keyof typeof ministries];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  if (!ministry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ministry not found</h2>
        <button 
          onClick={() => navigate("/ministries")} 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Return to Ministries
        </button>
      </div>
    );
  }

  const handleBackClick = () => {
    setIsVisible(false);
    setTimeout(() => navigate(-1), 300);
  };

  return (
    <motion.div 
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      className="min-h-screen bg-white pt-20"
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={ministry.image}
          alt={ministry.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        
        <div className="absolute top-8 left-4 md:left-8 z-20">
          <button 
            onClick={handleBackClick} 
            className="flex items-center gap-2 text-white/90 hover:text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full transition-all backdrop-blur-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
            </svg>
            Back
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-screen-xl mx-auto">
            <motion.h1 
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4"
            >
              {ministry.name}
            </motion.h1>
            <motion.p 
              variants={slideUp}
              className="text-xl md:text-2xl text-blue-100 max-w-2xl"
            >
              {ministry.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            <motion.section variants={slideUp}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">About This Ministry</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{ministry.fullDescription}</p>
            </motion.section>

            <motion.section variants={slideUp}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Responsibilities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ministry.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <span className="text-blue-500 mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section variants={slideUp}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Benefits of Joining</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ministry.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 mt-1">â˜…</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.div 
            className="lg:w-1/3 space-y-8"
            variants={slideUp}
          >
            {/* Meeting Info Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                Meeting Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-gray-50 p-3 rounded-full h-fit text-gray-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">When</h4>
                    <p className="text-gray-600">{ministry.meetingDay} at {ministry.meetingTime}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-gray-50 p-3 rounded-full h-fit text-gray-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Where</h4>
                    <p className="text-gray-600">{ministry.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                Leadership
              </h3>
              <div>
                 <p className="text-lg font-bold text-gray-900">{ministry.leader}</p>
                 <p className="text-blue-600 font-medium">{ministry.leaderTitle}</p>
              </div>
            </div>

            {/* Contact Card */}
             <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                Contact
              </h3>
              <div className="space-y-4">
                <a href={`mailto:${ministry.email}`} className="flex items-center gap-3 hover:text-blue-200 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span className="break-all">{ministry.email}</span>
                </a>
                <a href={`tel:${ministry.contact}`} className="flex items-center gap-3 hover:text-blue-200 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>{ministry.contact}</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default MinistryDetails;
