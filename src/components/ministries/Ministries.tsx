import { Link } from "react-router-dom";
import choir from "../../assets/images/choir.png";
import global from "../../assets/images/global.png";
import media from "../../assets/images/media.png";
import children from "../../assets/images/image1.jpg";

import "./ministries.css";

function Ministries() {
  // Array of ministries
  const ministries = [
    {
      id: 1,
      title: "Global Kingdom Voices",
      image: global,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reprehenderit.",
    },
    {
      id: 2,
      title: "Vibrant Choir",
      image: choir,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reprehenderit.",
    },
    {
      id: 3,
      title: "Media",
      image: media,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reprehenderit.",
    },
    {
      id: 4,
      title: "Children",
      image: children,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reprehenderit.",
    },

  ];

  return (
    <div>
      <section className="services-area" id="services">
        <h3 className="section-title">Ministries</h3>
        <ul className="services-content ">
          {ministries.map((ministry) => (
            <li key={ministry.id} >
              <div className="ministry-card">
                <img alt={ministry.title} src={ministry.image} />
                <div className="ministry-info">
                  <h4>{ministry.title}</h4>
                  <p>{ministry.description}</p>
                  <button className="view-more">
                    <Link to={`/ministry/${ministry.id}`}>Read More</Link>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Ministries;
