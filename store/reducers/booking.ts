import {
  BookingActionTypes,
  BookingAction,
  BookingState,
} from "../../types/booking"

const initialState: BookingState = {
  checkin: null,
  checkout: null,
}

export const bookingReducer = (
  state = initialState,
  action: BookingAction
): BookingState => {
  switch (action.type) {
    case BookingActionTypes.SET_CHECKIN:
      return { ...state, checkin: action.payload }
    case BookingActionTypes.SET_CHECKOUT:
      return { ...state, checkout: action.payload }
    default:
      return state
  }
}
