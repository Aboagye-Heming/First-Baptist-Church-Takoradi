// export default AboutUs;
import "./about-us.css"; // Import the CSS file for styling
// import missionImage from "../../assets/images/mission.jpg";
// import historyImage from "../../assets/images/history.jpg";
// import visionImage from "../../assets/images/vision.jpg";
// import churchImage from "../../assets/images/church_image.jpg";
// import image1 from "../../assets/images/ch-building.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* <img src={image1} alt="Mission" className="about-us-section-image" /> */}
        <h1>MISSION STATEMENT</h1>
        <p>To worship God, make Disciples and serve Humanity.</p>
      </div>
      <div className="about-us-content">
        {/* <img src={image1} alt="History" className="about-us-section-image" /> */}
        <h1>Our History</h1>
        <p>
          First Baptist Church Takoradi was established in 1925 with the mission
          to spread the gospel and serve the community. Over the years, we have
          grown from a small congregation to a thriving community of believers
          dedicated to worship, discipleship, and service. Our church has been a
          beacon of hope and a pillar of strength in Takoradi, providing
          spiritual guidance and support to generations of families.
        </p>
      </div>
      <div className="about-us-content">
        {/* <img src={image1} alt="Vision" className="about-us-section-image" /> */}
        <h1>Our Vision</h1>
        <p>
          Our vision is to be a Christ-centered church that transforms lives
          through the power of the Holy Spirit, engages with the community, and
          impacts the world with the message of God's love. We strive to create
          an inclusive environment where everyone feels welcome and valued, and
          where people can grow in their faith and service.
        </p>
      </div>
      <div className="about-us-image">
        {/* <img src={image1} alt="Church" /> */}
      </div>
    </div>
  );
};

export default AboutUs;
