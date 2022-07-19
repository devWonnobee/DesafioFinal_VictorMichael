import { ADD_BOOKING } from "../actions/booking.action"
import BookingModel from '../../models/booking.model'

const initialState = {
  bookings: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_BOOKING:
      const newBooking = new BookingModel(
        action.payload.id.toString(),
        action.payload.name,
        action.payload.surname,
        action.payload.date)
        return {
          ...state,
          bookings: state.bookings.concat(newBooking)
        }
    default:
      return state
  }
}
