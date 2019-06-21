import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import config from "./config";
class TrailMap extends Component {
  render() {
    const viewConfig = config;
    return (
      <Paper style={viewConfig.mapContainer} elevation={8}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.api }}
          defaultCenter={viewConfig.center}
          defaultZoom={viewConfig.zoom}
          options={viewConfig.mapStyle}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            // **** Action dispatched to Save the Map instance in Redux Store's mapObject.
            //*** This instance will be used to manipulate the map outside of the map DOM
            //this.props.renderAttractions(map, maps);
          }}
        />
      </Paper>
    );
  }
}
const mapStateToProps = state => {
  const { mapConfig } = state; // the state object comes from Redux store
  return {
    mapContainer: state.mapConfig.mapContainer,
    api: mapConfig.apikey,
    mapStyle: mapConfig.mapStyle,
    clickOnMarker: mapConfig.clickOnMarker,
    renderMarkers: mapConfig.renderMarkers,
    renderTrails: mapConfig.renderTrails,
    renderAttractions: mapConfig.renderAttractions,
    zoomOut: mapConfig.zoomOut
  };
};

export default connect(mapStateToProps)(TrailMap);
