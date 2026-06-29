import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>TravelGo</h3>

      <p>Explore the world with comfort, safety and unforgettable experiences.</p>

      <hr />

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/destinations">Destinations</a>
        <a href="/booking">Booking</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="social-icons">
        <a href="#">📘</a>
        <a href="#">📷</a>
        <a href="#">🐦</a>
        <a href="#">💼</a>
      </div>

      <p style={{ marginTop: "25px" }}>
        © 2026 TravelGo. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;