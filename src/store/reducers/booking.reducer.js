import BookingModel from "../../models/booking.model";
import { bookingTypes } from "../types/booking.types";

const { ADD_BOOKING, LIST_BOOKING, DELETE_BOOKING } = bookingTypes;

const initialState = {
  BookingModel: [],
};

const bookingReducer = (state = initialState, action) => {
  switch(type.action) {
    case ADD_BOOKING:
      const newBooking = new BookingModel(
        action.payload.id, action.payload.name, action.payload.surname, action.payload.phone, action.payload._time);
  }
}
