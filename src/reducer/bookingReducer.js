export const initialState = {
  bookings: []
};

export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING":
      return {
        ...state,
        bookings: [...state.bookings, action.payload]
      };

    case "DELETE_BOOKING":
      return {
        ...state,
        bookings: state.bookings.filter(
          (_, index) => index !== action.index
        )
      };

    default:
      return state;
  }
};