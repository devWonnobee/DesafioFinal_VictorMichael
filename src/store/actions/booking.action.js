import { getBooking, insertBooking } from "../../db";

import { bookingTypes } from "../types/booking.types";

const { ADD_BOOKING, LIST_BOOKING, DELETE_BOOKING } = bookingTypes;

export const addBooking = (id, name, surname, phone, date, _time) =>  {
    return async dispatch => {
      try {
        const result = await insertBooking(id, name, surname, phone, _time);
        console.log('result insertAddress', result)

        dispatch({
          type: ADD_BOOKING,
        })
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    }
    
}

export const listBooking = (id) => ({
  type: LIST_BOOKING,
  id
});

export const deleteBooking = (id) => ({
  type: DELETE_BOOKING,
  id
})