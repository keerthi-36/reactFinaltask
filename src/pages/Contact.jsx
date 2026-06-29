import "../styles/Contact.css"


const Contact = () => {
  return (
    <div className="contact">

      <h1>Contact Us</h1>

      <p>
        We'd love to hear from you! Whether you have questions about bookings,
        holiday packages, cancellations, or special offers, our team is here to
        help.
      </p>

      <div className="contact-info">

        <h2>Office Address</h2>
        <p>
          TravelGo Pvt Ltd<br />
          Anna Salai,<br />
          Chennai - 600002,<br />
          Tamil Nadu, India
        </p>

        <h2>Contact Details</h2>

        <p>📞 +91 9876543210</p>

        <p>☎️ +91 9876501234</p>

        <p>📧 support@travelgo.com</p>

        <p>🌐 www.travelgo.com</p>

        <h2>Working Hours</h2>

        <p>Monday - Friday : 9:00 AM - 7:00 PM</p>

        <p>Saturday : 10:00 AM - 5:00 PM</p>

        <p>Sunday : Holiday</p>

      </div>

    </div>
  );
};

export default Contact;