import { useState, useEffect } from "react";
import logo from "../../assets/images/Rev.jpg";
import "./about-us.css";

const verses = [
  {
    id: 1,
    text: "For the word of God is alive and active.",
    verse: "Hebrews 4:12",
  },
  {
    id: 2,
    text: "Heaven and earth will pass away but my words will never pass away. ",
    verse: " Matthew 24:35",
  },
  {
    id: 3,
    text: "The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom.",
    verse: "  Isaiah 40:28",
  },
];

const AboutUs = () => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prevIndex) =>
        prevIndex === verses.length - 1 ? 0 : prevIndex + 1
      );
    }, 86400000); // Change verse every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="about-content ">
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
                A place where the hurting, discouraged, confused, bound and
                frustrated can find love, acceptance, guidance, encouragement,
                forgiveness and hope through our Lord Jesus.
                <br />
                <br />
                We believe that God is sovereign in the election and salvation
                of all who believe in His Son. He regenerates and saves sinners
                and sanctifies believers.
                <br />
                <br /> We believe that a local church is a congregation of
                Baptised believers, associated by covenant or agreement in faith
                and fellowship of the Gospel of Jesus Christ working to carry on
                God’s work and glorify His name. <br /> <br />
                Reverend Marklin Agbakey is the Senior Pastor of First Baptist
                Church. Reverend Marklin Agbakey exercises a remarkable ministry
                and all who know him will agree that he is truly a man of God.
                His love for the Word of God and his deep commitment to prayer
                and revival.
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="msg-area">
        <div className="msg-content">
          <h2>Verse of the day</h2>
          <p>{verses[currentVerseIndex].text}</p>
          <p>{verses[currentVerseIndex].verse}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
