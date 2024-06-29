import { useParams } from "react-router-dom";

function MinistryDetails() {
  const { id } = useParams();
  // Fetch ministry details using id

  return (
    <div>
      {/* Display details of the ministry */}
      <h2>Ministry Details for Ministry {id}</h2>
      {/* Add more details here */}
    </div>
  );
}

export default MinistryDetails;
