import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { center, config } from "./config";
import { renderMarkers } from "./markers";
import { renderTrails } from "./trails";
import Paper from "@material-ui/core/Paper";

class TrailMap extends Component {
  static defaultProps = config.defaultProps;

  GoogleMapApiConfigurations(map, maps) {
    renderMarkers(map, maps);
    renderTrails(map, maps);
  }
  render() {
    return (
      <Paper style={config.mapContainer} elevation={2}>
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
      </Paper>
    );
  }
}

export default TrailMap;
