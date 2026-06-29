import { Link } from "react-router-dom";
import "../styles/DestinationCard.css";

const DestinationCard = ({ place }) => {
  return (
    <div className="card">
      <img src={place.image} alt={place.name} />

      <div className="card-body">
        <h2>{place.name}</h2>
        <p>{place.location}</p>
        <h3>₹ {place.price}</h3>

        <Link to={`/destinations/${place.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;