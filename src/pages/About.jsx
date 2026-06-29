
import "../styles/About.css"

const About = () => {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <h1>🌍 About TravelGo</h1>
        <p>
          TravelGo is a modern travel booking platform designed to make your
          travel planning simple, fast, and affordable. We help you explore the
          world with ease.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="story">
        <h2>📖 Our Story</h2>
        <p>
          Founded in 2026, TravelGo started with a vision to make travel
          accessible for everyone. From small weekend trips to luxury
          international vacations, we provide customized travel experiences.
        </p>
      </section>

      {/* MISSION */}
      <section className="mission">
        <h2>🎯 Our Mission</h2>
        <p>
          Our mission is to connect people with amazing destinations while
          offering affordable prices, secure booking, and excellent customer
          support.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>🧳 What We Offer</h2>

        <ul>
          <li>✈️ Flight Booking</li>
          <li>🏨 Hotel Reservations</li>
          <li>🚌 Tour Packages</li>
          <li>🚖 Transportation Services</li>
          <li>🌍 International Tours</li>
        </ul>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>⭐ Why Choose TravelGo?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Best Prices</h3>
            <p>We offer affordable travel packages for all budgets.</p>
          </div>

          <div className="why-card">
            <h3>Trusted Service</h3>
            <p>Thousands of happy travelers trust us every year.</p>
          </div>

          <div className="why-card">
            <h3>24/7 Support</h3>
            <p>Our team is available anytime for assistance.</p>
          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="team">
        <h2>👨‍💼 Our Team</h2>
        <p>
          Our team includes travel experts, customer support agents, and
          destination planners who ensure your trip is smooth and memorable.
        </p>
      </section>

      {/* VISION */}
      <section className="vision">
        <h2>🚀 Our Vision</h2>
        <p>
          To become the most trusted travel booking platform in India and
          globally by providing seamless travel experiences.
        </p>
      </section>

    </div>
  );
};

export default About;