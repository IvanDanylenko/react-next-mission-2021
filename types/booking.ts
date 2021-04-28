export enum BookingActionTypes {
  SET_CHECKIN = "SET_CHECKIN",
  SET_CHECKOUT = "SET_CHECKOUT",
}

export interface BookingState {
  checkin: Date | null
  checkout: Date | null
}

interface SetCheckin {
  type: BookingActionTypes.SET_CHECKIN
  payload: Date | null
}

interface SetCheckout {
  type: BookingActionTypes.SET_CHECKOUT
  payload: Date | null
}

export type BookingAction = SetCheckin | SetCheckout
