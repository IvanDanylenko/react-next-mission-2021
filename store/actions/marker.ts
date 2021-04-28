import { MarkerAction, MarkerActionTypes, Marker } from "../../types/marker"

export const setMarker = (payload: Marker): MarkerAction => {
  return { type: MarkerActionTypes.SET_MARKER, payload }
}

export const setSelectedMarker = (payload: Marker): MarkerAction => {
  return { type: MarkerActionTypes.SET_SELECTED_MARKER, payload }
}
