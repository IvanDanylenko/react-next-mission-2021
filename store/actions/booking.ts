import { BookingAction, BookingActionTypes } from "../../types/booking"

export const setCheckin = (payload: Date): BookingAction => {
  return { type: BookingActionTypes.SET_CHECKIN, payload }
}

export const setCheckout = (payload: Date): BookingAction => {
  return { type: BookingActionTypes.SET_CHECKOUT, payload }
}
