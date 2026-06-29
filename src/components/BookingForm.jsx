import { useRef, useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const nameRef = useRef();

  const [form, setForm] = useState({
    name: "",
    destination: "",
    persons: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.destination || !form.persons) {
      alert("Please fill all fields");
      nameRef.current.focus();
      return;
    }

    alert("Booking Successful!");

    setForm({
      name: "",
      destination: "",
      persons: "",
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="destination"
        placeholder="Destination"
        value={form.destination}
        onChange={handleChange}
      />

      <input
        type="number"
        name="persons"
        placeholder="Number of Persons"
        value={form.persons}
        onChange={handleChange}
      />

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;