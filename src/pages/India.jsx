import destinations from "../data/destinations";

const India = () => {
  const indiaPlaces = destinations.filter(
    (item) => item.country === "India"
  );

  return (
    <div className="grid-page">

      <h1>🇮🇳 Incredible India Tour Packages</h1>

      <p>
        Explore the beauty of India with diverse cultures, hill stations,
        beaches, historical monuments and spiritual destinations.
        Choose from budget to luxury travel packages.
      </p>

      <div className="grid">

        {indiaPlaces.map((item) => (
          <div key={item.id} className="card">

            <h2>{item.name}</h2>

            <p>📍 {item.country}</p>

            <p>⏳ Duration: {item.duration}</p>

            <p>✨ {item.description}</p>

            <h3>💰 ₹{item.price}</h3>

            <button>Book Now</button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default India;