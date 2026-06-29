import destinations from "../data/destinations";
import { Link } from "react-router-dom";
import "../styles/Destination.css"

const Destinations = () => {
  return (
    <div>

      <h1>All Destinations</h1>

      <div className="grid">
        {destinations.map((item) => (
          <div key={item.id}>
            <img src={item.image} width="200" />
            <h3>{item.name}</h3>
            <p>{item.country}</p>

            <Link to={`/destination/${item.id}`}>
              View
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Destinations;