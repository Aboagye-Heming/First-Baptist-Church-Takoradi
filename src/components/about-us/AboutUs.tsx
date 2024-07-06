import logo from "../../assets/images/Rev.jpg";
import "./about-us.css";

const AboutUs = () => {
  return (
    <div>
      <div className="about-content">
        <div className="about-left">
          <img src={logo} alt="church-logo" />
        </div>
        <div className="about-right">
          <h2>
            <span>WELCOME</span> TO FBCT
          </h2>
          <div className="wrapper">
            <div className="about-main-content">
              <div>
                Welcome to our loving community, a place where hearts are
                healed, spirits lifted, and souls embraced in the warmth of
                God's love.
                <br />
                <br />
                In our sanctuary, amidst the solace of fellowship, we find not
                only solace but also guidance, encouragement, and the promise of
                redemption through our Lord Jesus Christ.
                <br />
                <br />
                Here, we believe in the divine grace that flows freely,
                enveloping every seeking soul in the boundless embrace of God's
                mercy and compassion.
                <br />
                <br />
                Our congregation, united in faith and bound by the gospel, is
                dedicated to glorifying His name and spreading the light of His
                love throughout our community.
                <br />
                <br />
                At the helm of our spiritual journey stands Reverend Marklin
                Agbakey, our esteemed Senior Pastor, a beacon of faith and a
                vessel of God's wisdom and grace. His dedication to the Word and
                fervent prayers illuminate our path, guiding us towards
                spiritual growth and revival.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
