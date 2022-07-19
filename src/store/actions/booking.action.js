import { getBooking, insertBooking } from "../../db";

export const ADD_BOOKING = 'ADD_BOOKING'

export const addBooking = (pname, surname, phone, date) => {
  return async dispatch => {
    try{
      const result = await insertBooking(
        pname,
        surname,
        phone,
        date)
        console.log(result);
      dispatch({type: ADD_BOOKING, payload: {id: result.insertId, pname, surname, date}})
    } catch (err) {
      console.log(err.message)
      throw err
    }
  }
}