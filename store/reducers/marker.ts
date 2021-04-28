import {
  MarkerActionTypes,
  MarkerAction,
  MarkerState,
} from "../../types/marker"

const initialState: MarkerState = {
  markers: [],
  selectedMarker: null,
}

export const markerReducer = (
  state = initialState,
  action: MarkerAction
): MarkerState => {
  switch (action.type) {
    case MarkerActionTypes.SET_MARKER:
      return { ...state, markers: [...state.markers, action.payload] }
    case MarkerActionTypes.SET_SELECTED_MARKER:
      return { ...state, selectedMarker: action.payload }
    default:
      return state
  }
}
