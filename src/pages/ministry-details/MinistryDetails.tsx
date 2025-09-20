import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import choir from "../../assets/images/choir.png";
import global from "../../assets/images/global.png";
import media from "../../assets/images/media.png";
import children from "../../assets/images/image1.jpg";
import usher from "../../assets/images/usher.png";
import "./ministry-details.css";

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
      <div className="ministry-not-found">
        <h2>Ministry not found</h2>
        <button onClick={() => navigate("/ministries")} className="back-button">
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
    <div className={`ministry-details-container ${isVisible ? "visible" : ""}`}>
      <div className="ministry-hero">
        <div className="hero-content">
          <button onClick={handleBackClick} className="back-button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Ministries
          </button>
          <h1>{ministry.name}</h1>
          <p className="ministry-tagline">{ministry.description}</p>
        </div>
        <div className="hero-image">
          <img
            src={ministry.image}
            alt={ministry.name}
            className="ministry-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>

      <div className="ministry-content">
        <div className="content-main">
          <section className="ministry-description">
            <h2>About This Ministry</h2>
            <p>{ministry.fullDescription}</p>
          </section>

          <section className="ministry-responsibilities">
            <h2>Responsibilities</h2>
            <ul>
              {ministry.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="ministry-benefits">
            <h2>Benefits of Joining</h2>
            <ul>
              {ministry.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="content-sidebar">
          <div className="info-card">
            <h3>Meeting Information</h3>
            <div className="info-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="info-label">When</p>
                <p>
                  {ministry.meetingDay} at {ministry.meetingTime}
                </p>
              </div>
            </div>
            <div className="info-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="info-label">Where</p>
                <p>{ministry.location}</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Leadership</h3>
            <div className="leader-info">
              <div className="leader-name">{ministry.leader}</div>
              <div className="leader-title">{ministry.leaderTitle}</div>
            </div>
          </div>

          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 6L12 13L3 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="info-label">Email</p>
                <a href={`mailto:${ministry.email}`}>{ministry.email}</a>
              </div>
            </div>
            <div className="info-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92V19.92C22 20.52 21.53 20.99 20.96 21.08C20.53 21.15 20.11 21.2 19.7 21.24C17.27 21.47 14.82 21.34 12.44 20.86C9.97 20.36 7.59 19.43 5.38 18.11C3.22 16.82 1.39 15.15 0 13.18C0.31 12.76 0.64 12.35 0.99 11.97C1.39 11.54 1.94 11.25 2.54 11.25H5.54C6.14 11.25 6.64 11.53 6.95 11.95C7.78 13.05 8.83 13.97 10.02 14.65C10.3 14.81 10.51 15.08 10.59 15.4C10.67 15.72 10.62 16.06 10.44 16.34L9.44 17.87C10.77 18.63 12.19 19.2 13.66 19.57C14.13 19.69 14.65 19.45 14.86 19.01L15.89 16.84C16 16.56 16.25 16.35 16.55 16.28C16.85 16.21 17.17 16.29 17.4 16.49C18.41 17.35 19.57 18.03 20.83 18.5C21.26 18.67 21.52 19.11 21.46 19.58L21.43 19.86L21.4 20.05"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="info-label">Phone</p>
                <a href={`tel:${ministry.contact}`}>{ministry.contact}</a>
              </div>
            </div>
          </div>

          {/* <button className="join-ministry-btn">
            Join This Ministry
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default MinistryDetails;
