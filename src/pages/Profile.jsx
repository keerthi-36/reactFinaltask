import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/Profile.css"

const Profile = () => {
  const { bookings, dispatch } = useContext(UserContext);

  return (
    <div>
      <h1>My Bookings</h1>

      {bookings.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.destination}</p>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_BOOKING",
                index
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Profile;