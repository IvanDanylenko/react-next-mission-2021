export enum MarkerActionTypes {
  SET_MARKER = 'SET_MARKER',
  SET_SELECTED_MARKER = 'SET_SELECTED_MARKER',
}

export interface Marker {
  lat: number;
  lng: number;
  time: Date;
}

export interface MarkerState {
  selectedMarker: Marker | null;
  markers: Marker[];
}

interface SetMarker {
  type: MarkerActionTypes.SET_MARKER;
  payload: Marker;
}

interface SetSelectedMarker {
  type: MarkerActionTypes.SET_SELECTED_MARKER;
  payload: Marker | null;
}

export type MarkerAction = SetMarker | SetSelectedMarker;
