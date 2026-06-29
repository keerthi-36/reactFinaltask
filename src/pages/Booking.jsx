import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/Booking.css"

const Booking = () => {
  const { dispatch } = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    destination: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_BOOKING",
      payload: form
    });

    setForm({ name: "", destination: "" });
  };

  return (
    <div>
      <h1>Booking Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Destination"
          value={form.destination}
          onChange={(e) =>
            setForm({ ...form, destination: e.target.value })
          }
        />

        <button>Add Booking</button>
      </form>
    </div>
  );
};

export default Booking;