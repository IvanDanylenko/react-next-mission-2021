import { BookingAction, BookingActionTypes } from "../../types/booking"

export const setCheckin = (payload: Date | null): BookingAction => {
  return { type: BookingActionTypes.SET_CHECKIN, payload }
}

export const setCheckout = (payload: Date | null): BookingAction => {
  return { type: BookingActionTypes.SET_CHECKOUT, payload }
}
