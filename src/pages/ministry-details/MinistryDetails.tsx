import { useParams, useNavigate } from "react-router-dom";
import choir from "../../assets/images/choir.png";
import global from "../../assets/images/global.png";
import media from "../../assets/images/media.png";
import children from "../../assets/images/ch3.png";
import "./ministry-details.css";

// Example static data for ministries
const ministries: Record<string, { 
  name: string;
  description: string;
  leader: string;
  contact: string;
  email: string;
  image: string;
}> = {
  "1": {
    name: "Global Kingdom Voices",
    description:
      "Our Global Kingdom Voices Ministry focuses on spreading the gospel through various media and platforms.",
    leader: "Jane Doe",
    contact: "+233 27 774 2296",
    email: "gkv@firstbaptistchurch.com",
    image: global,
  },
  "2": {
    name: "Vibrant Choir",
    description:
      "The Vibrant Choir leads the congregation in worship through music, singing, and special performances.",
    leader: "John Smith",
    contact: "+233 27 774 2297",
    email: "choir@firstbaptistchurch.com",
    image: choir,
  },
  "3": {
    name: "Media",
    description:
      "The Media Ministry handles all the technical aspects of our services, including sound, lighting, and video production.",
    leader: "Alice Brown",
    contact: "+233 27 774 2298",
    email: "media@firstbaptistchurch.com",
    image: media,
  },
  "4": {
    name: "Children",
    description:
      "Our Children's Ministry provides a safe and fun environment for children to learn about God's love.",
    leader: "Michael Johnson",
    contact: "+233 27 774 2299",
    email: "children@firstbaptistchurch.com",
    image: children,
  },
};

function MinistryDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ministry = ministries[id as keyof typeof ministries];

  if (!ministry) {
    return <h2>Ministry not found</h2>;
  }

  return (
    <div className="ministry-details-container">
      <div className="ministry-header">
        <h1>{ministry.name}</h1>
        <img
          src={ministry.image}
          alt={ministry.name}
          className="ministry-image"
        />
      </div>
      <div className="ministry-body">
        <p>{ministry.description}</p>
        <h3>Ministry Leader</h3>
        <p>{ministry.leader}</p>
        <h3>Contact Information</h3>
        <p>Phone: {ministry.contact}</p>
        <p>
          Email: <a href={`mailto:${ministry.email}`}>{ministry.email}</a>
        </p>
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>
      </div>
    </div>
  );
}

export default MinistryDetails;
