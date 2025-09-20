import { Link } from "react-router-dom";
import { useState } from "react";
import choir from "../../assets/images/choir.png";
import global from "../../assets/images/global.png";
import media from "../../assets/images/media.png";
import children from "../../assets/images/image1.jpg";
import usher from "../../assets/images/usher.png";
import "./ministries.css";

function Ministries() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const ministries = [
    {
      id: 1,
      title: "Global Kingdom Voices",
      image: global,
      description:
        "Our international worship team that leads the congregation in praise through diverse cultural expressions of faith.",
      icon: "🎵",
    },
    {
      id: 2,
      title: "Vibrant Choir",
      image: choir,
      description:
        "A dynamic choir that enhances our worship services with powerful harmonies and inspirational music.",
      icon: "🎼",
    },
    {
      id: 3,
      title: "Media Ministry",
      image: media,
      description:
        "Technical team dedicated to spreading God's word through audio, video, and online platforms.",
      icon: "📹",
    },
    {
      id: 4,
      title: "Children's Ministry",
      image: children,
      description:
        "Nurturing young hearts in faith through engaging activities, Bible stories, and age-appropriate worship.",
      icon: "👧👦",
    },
    {
      id: 5,
      title: "Ushers & Greeters",
      image: usher,
      description:
        "The welcoming face of our church, creating a warm and organized environment for all attendees.",
      icon: "🤝",
    },
  ];

  return (
    <div>
      <section className="ministries-area" id="ministries">
        <div className="ministries-header">
          <h3 className="section-title">Church Ministries</h3>
          <p className="section-subtitle">
            Serving God through our unique gifts and talents
          </p>
        </div>

        <div className="ministries-grid">
          {ministries.map((ministry, index) => (
            <div
              key={ministry.id}
              className={`ministry-card ${
                hoveredCard === ministry.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredCard(ministry.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image-container">
                <img
                  alt={ministry.title}
                  src={ministry.image}
                  className="card-image"
                />
                <div className="image-overlay"></div>
                <div className="ministry-icon">{ministry.icon}</div>
              </div>

              <div className="card-content">
                <h4>{ministry.title}</h4>
                <p>{ministry.description}</p>

                <div className="card-actions">
                  <button className="view-more-btn">
                    <Link to={`/ministry/${ministry.id}`}>
                      Learn More
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
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="ministries-cta-modern">
          <div className="cta-content">
            <div className="cta-icon">🙌</div>
            <div className="cta-text">
              <h3>Discover Your Gift & Serve the Church</h3>
              <p>
                Join a ministry that aligns with your talents and passion.
                Together, we can make a greater impact in our community.
              </p>
            </div>
          </div>
          <button className="cta-button-modern">
            <Link to="/get-involved">Get Started</Link>
          </button>
        </div> */}
      </section>
    </div>
  );
}

export default Ministries;
