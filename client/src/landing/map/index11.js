import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { center, config } from "./config";

class TrailMap extends Component {
  render() {
    return (
      <LoadScript id="script-loader" googleMapsApiKey={config.apikey}>
        <GoogleMap
          id="franco-trail"
          center={center}
          zoom={config.zoom}
          options={config.mapStyle}
        />
      </LoadScript>
    );
  }
}

export default TrailMap;
