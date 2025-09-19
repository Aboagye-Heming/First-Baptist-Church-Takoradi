import logo from "../../assets/images/Rev.jpg";
import "./about-us.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Left: Pastor Image */}
        <div className="about-left fade-in-image">
          <img src={logo} alt="church-pastor" />
        </div>

        {/* Right: Text */}
        <div className="about-right">
          <h2 className="animate-heading">
            <span>WELCOME</span> TO FBCT
          </h2>
          <div className="wrapper">
            <div className="about-main-content">
              <p>
                Welcome to our loving community, a place where hearts are
                healed, spirits lifted, and souls embraced in the warmth of
                God's love.
              </p>
              <p>
                In our sanctuary, amidst the solace of fellowship, we find not
                only peace but also guidance, encouragement, and the promise of
                redemption through our Lord Jesus Christ.
              </p>
              <p>
                Here, we believe in the divine grace that flows freely,
                enveloping every seeking soul in the boundless embrace of God's
                mercy and compassion.
              </p>
              <p>
                Our congregation, united in faith and bound by the gospel, is
                dedicated to glorifying His name and spreading the light of His
                love throughout our community.
              </p>
              <p>
                At the helm of our spiritual journey stands Reverend Marklin
                Agbakey, our esteemed Senior Pastor, a beacon of faith and a
                vessel of God's wisdom and grace. His dedication to the Word and
                fervent prayers illuminate our path, guiding us towards
                spiritual growth and revival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
