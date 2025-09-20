import React from "react";
import "./about-us.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>About First Baptist Church Takoradi</h1>
          <p className="hero-subtitle">Serving our community since 1925</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <div className="section-content">
          <div className="text-content">
            <div className="section-header">
              <span className="section-tag">Our Purpose</span>
              <h2>Mission Statement</h2>
              <div className="divider"></div>
            </div>
            <p className="mission-statement">
              To worship God, make Disciples and serve Humanity.
            </p>
            <div className="scripture-verse">
              <p>
                "Therefore go and make disciples of all nations, baptizing them
                in the name of the Father and of the Son and of the Holy
                Spirit."
              </p>
              <span className="verse-reference">- Matthew 28:19</span>
            </div>
          </div>
          <div className="image-placeholder mission-image">
            <div className="placeholder-content">
              <span>Mission Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="about-section history-section">
        <div className="section-content reversed">
          <div className="image-placeholder history-image">
            <div className="placeholder-content">
              <span>History Image</span>
            </div>
          </div>
          <div className="text-content">
            <div className="section-header">
              <span className="section-tag">Our Journey</span>
              <h2>Our History</h2>
              <div className="divider"></div>
            </div>
            <p>
              First Baptist Church Takoradi was established in 1925 with the
              mission to spread the gospel and serve the community. Over the
              years, we have grown from a small congregation to a thriving
              community of believers dedicated to worship, discipleship, and
              service.
            </p>
            <p>
              Our church has been a beacon of hope and a pillar of strength in
              Takoradi, providing spiritual guidance and support to generations
              of families.
            </p>
            <div className="milestone">
              <div className="milestone-year">1925</div>
              <div className="milestone-text">Church Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-section vision-section">
        <div className="section-content">
          <div className="text-content">
            <div className="section-header">
              <span className="section-tag">Our Future</span>
              <h2>Our Vision</h2>
              <div className="divider"></div>
            </div>
            <p>
              Our vision is to be a Christ-centered church that transforms lives
              through the power of the Holy Spirit, engages with the community,
              and impacts the world with the message of God's love.
            </p>
            <p>
              We strive to create an inclusive environment where everyone feels
              welcome and valued, and where people can grow in their faith and
              service.
            </p>
            <ul className="vision-list">
              <li>Christ-centered worship</li>
              <li>Community transformation</li>
              <li>Global impact</li>
            </ul>
          </div>
          <div className="image-placeholder vision-image">
            <div className="placeholder-content">
              <span>Vision Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header centered">
          <h2>Our Core Values</h2>
          <div className="divider centered"></div>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🙏</div>
            <h3>Faith</h3>
            <p>Trusting in God's plan and living according to His word</p>
          </div>
          <div className="value-card">
            <div className="value-icon">👥</div>
            <h3>Community</h3>
            <p>Building strong relationships and supporting one another</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Service</h3>
            <p>Using our gifts to serve God and help others</p>
          </div>
          <div className="value-card">
            <div className="value-icon">📖</div>
            <h3>Scripture</h3>
            <p>Grounding our lives in the truth of the Bible</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join Us in Our Mission</h2>
        <p>
          We welcome you to be part of our church family and journey of faith
        </p>
        <button className="cta-button">Visit Us This Sunday</button>
      </section>
    </div>
  );
};

export default AboutUs;
