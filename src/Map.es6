import React from 'react';
import ReactGoogleMaps from 'react-googlemaps';
const GoogleMapsAPI = window.google.maps;
const LL = GoogleMapsAPI.LatLng;
const GMap = ReactGoogleMaps.Map;
const Marker = ReactGoogleMaps.Marker;
const OverlayView = ReactGoogleMaps.OverlayView;

export default class Map extends React.Component {

  render() {
    const markers = [
      [59.3234, 18.0686],
      [59.3294, 18.0686],
      [59.3244, 18.0684],
      [59.3244, 18.0694],
      [59.3244, 18.0714],
      [59.3254, 18.0694],
      [59.3234, 18.0694],
      [59.3238, 18.0696],
      [59.3294, 18.0685],
      [59.3394, 18.0534],
      [59.3214, 18.1534],
      [59.3314, 18.0584],
      [59.3114, 18.1534],
      [59.3294, 18.0673]
    ];

    return (
      <GMap
        height={window.innerHeight - 50}
        initialZoom={13}
        initialCenter={new LL(59.3294, 18.0686)}>
        { markers.map(m => <Marker position={new LL(...m)} />) }
      </GMap>
    );
  }

};
