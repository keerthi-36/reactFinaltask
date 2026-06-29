import { Link } from "react-router-dom";
import destinations from "../data/destinations";
import "../styles/Home.css"

const Home = () => {
  const featured = destinations.slice(0, 3);

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <h1>🌍 TravelGo - Explore the World</h1>

        <p>
          Discover amazing destinations, book affordable travel packages,
          and enjoy unforgettable experiences with TravelGo.
        </p>

        <Link to="/destinations">
          <button>Explore Destinations</button>
        </Link>

      </section>

      {/* ABOUT SHORT */}
      <section className="about-section">

        <h2>Why Travel With Us?</h2>

        <p>
          We provide safe, secure and budget-friendly travel packages for
          domestic and international destinations.
        </p>

        <ul>
          <li>✔️ Affordable Prices</li>
          <li>✔️ Trusted Service</li>
          <li>✔️ 24/7 Support</li>
          <li>✔️ Custom Packages</li>
        </ul>

      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="featured">

        <h2>⭐ Featured Destinations</h2>

        <div className="grid">

          {featured.map((item) => (
            <div key={item.id} className="card">

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>📍 {item.country}</p>

              <p>⏳ {item.duration}</p>

              <h4>₹{item.price}</h4>

            </div>
          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section className="services">

        <h2>Our Services</h2>

        <div className="grid">

          <div className="service-card">
            ✈️ Flight Booking
          </div>

          <div className="service-card">
            🏨 Hotel Booking
          </div>

          <div className="service-card">
            🚌 Tour Packages
          </div>

          <div className="service-card">
            🚖 Transport Services
          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}
      <section className="cta">

        <h2>Ready to Travel?</h2>

        <p>Start your journey today with TravelGo.</p>

        <Link to="/booking">
          <button>Book Now</button>
        </Link>

      </section>

    </div>
  );
};

export default Home;