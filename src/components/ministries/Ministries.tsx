import { Link } from "react-router-dom";
import image1 from "../../assets/images/ch-building.jpg";

import "./ministries.css";

function Ministries() {
  // Array of ministries
  const ministries = [
    {
      id: 1,
      title: "Global Kingdom Voices",
      image: image1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reprehenderit.",
    },
    {
      id: 2,
      title: "Vibrant Choir",
      image: image1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reprehenderit.",
    },
    {
      id: 3,
      title: "Media",
      image: image1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reprehenderit.",
    },
    {
      id: 4,
      title: "Children",
      image: image1,
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
