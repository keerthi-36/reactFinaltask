import destinations from "../data/destinations";

const International = () => {
  const internationalPlaces = destinations.filter(
    (item) => item.country !== "India"
  );

  return (
    <div className="grid-page">

      <h1>🌍 International Tour Packages</h1>

      <p>
        Discover the world’s most beautiful destinations with luxury travel
        experiences. From romantic Paris to adventurous Dubai, explore it all.
      </p>

      <div className="grid">

        {internationalPlaces.map((item) => (
          <div key={item.id} className="card">

            <h2>{item.name}</h2>

            <p>📍 {item.country}</p>

            <p>⏳ {item.duration}</p>

            <p>✨ {item.description}</p>

            <h3>💰 ₹{item.price}</h3>

            <button>Book Now</button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default International;