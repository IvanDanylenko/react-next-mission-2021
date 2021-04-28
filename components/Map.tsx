import React, { useEffect } from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url"
import { formatRelative } from "date-fns"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"

const center = {
  lat: 50.45266005384114,
  lng: 30.511024531405948,
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const libraries: Libraries = ["places"]

const Map: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAx5BV1C1UNvb3_wBLhK8BUZGSz3GD7aoo",
    libraries,
  })

  const { markers, selectedMarker } = useTypedSelector((state) => state.marker)
  const { setMarker, setSelectedMarker } = useActions()

  const onMapClick = React.useCallback((e: any) => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(),
    })

    console.log("Event", e)
  }, [])

  const mapRef = React.useRef()
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  if (loadError) return <h3>Error loading maps</h3>
  if (!isLoaded) return <h3>Loading Maps</h3>

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelectedMarker(marker)
            }}
          ></Marker>
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => {
              setSelectedMarker(null)
            }}
          >
            <div>
              <h2>Place Clicked!</h2>
              <p>{formatRelative(selectedMarker.time, new Date())}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  )
}

export default React.memo(Map)
