import { createContext, useReducer } from "react";
import { bookingReducer,initialState } from "../reducer/bookingReducer";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    bookingReducer,
    initialState
  );

  return (
    <UserContext.Provider
      value={{
        bookings: state.bookings,
        dispatch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;