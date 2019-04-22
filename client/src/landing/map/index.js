import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { center, config } from "./config";
import { renderMarkers } from "./markers";

class TrailMap extends Component {
  static defaultProps = config.defaultProps;

  GoogleMapApiConfigurations(map, maps) {
    renderMarkers(map, maps);
  }
  render() {
    return (
      <div style={config.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.apikey }}
          defaultCenter={center}
          defaultZoom={config.zoom}
          options={config.mapStyle}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            this.GoogleMapApiConfigurations(map, maps)
          }
        />
      </div>
    );
  }
}

export default TrailMap;
