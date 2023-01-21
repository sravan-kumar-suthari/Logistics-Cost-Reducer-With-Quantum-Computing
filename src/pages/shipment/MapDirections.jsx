import { useLoadScript } from "@react-google-maps/api";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  MarkerClusterer,
} from "@react-google-maps/api";

import React, { useState, useMemo, useCallback, useRef } from 'react';

const MapDirections = () => {
    // const [validated, ] = useState(false);
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: 'AIzaSyBbuWteIelsDEt9ene34MdyLUxbZ6eiB4w',
      libraries: ["places"],
    });
    const [office, setOffice] = useState();
    const [directions, setDirections] = useState();
    const mapRef = useRef();
    const center = useMemo(
      () => ({ lat: 43.45, lng: -80.49 }),
      []
    );
    const options = useMemo(
      () => ({
        mapId: "b181cac70f27f5e6",
        disableDefaultUI: true,
        clickableIcons: true,
      }),
      []
    );
    const onLoad = useCallback((map) => (mapRef.current = map), []);
    const houses = useMemo(() => generateHouses(center), [center]);
    if (!isLoaded) return <div>Loading...</div>;
    return (

        <div className="map">
          <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
            options={options}
            onLoad={onLoad}
          >
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  polylineOptions: {
                    zIndex: 50,
                    strokeColor: "#1976D2",
                    strokeWeight: 5,
                  },
                }} />
            )}

            {office && (
              <>
                <Marker
                  position={office}
                  icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />

                <MarkerClusterer>
                  {(clusterer) => houses.map((house) => (
                    <Marker
                      key={house.lat}
                      position={house}
                      clusterer={clusterer}
                      onClick={() => {
                        // fetchDirections(house);
                      } } />
                  ))}
                </MarkerClusterer>
              </>
            )}
          </GoogleMap>
        </div>
    );
}

  const generateHouses = (position) => {
    const _houses = [];
    for (let i = 0; i < 100; i++) {
      const direction = Math.random() < 0.5 ? -2 : 2;
      _houses.push({
        lat: position.lat + Math.random() / direction,
        lng: position.lng + Math.random() / direction,
      });
    }
    return _houses;
  };

  export default MapDirections;
