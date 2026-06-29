import { useParams } from "react-router-dom";
import destinations from "../data/destinations";

const DestinationDetails = () => {
  const { id } = useParams();

  const place = destinations.find((item) => item.id === Number(id));

  if (!place) {
    return <h2>Destination Not Found</h2>;
  }

  return (
    <div className="details">

      <h1>{place.name}</h1>

      <img src={place.image} alt={place.name} />

      <h3>Country: {place.country}</h3>

      <p>{place.description}</p>

      <h3>Duration: {place.duration}</h3>

      <h2>Price: ₹{place.price}</h2>

    </div>
  );
};

export default DestinationDetails;