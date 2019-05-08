import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { setMapObject } from "./actions";

class TrailMap extends Component {
  render() {
    return (
      <Paper style={this.props.mapContainer} elevation={2}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.api }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.props.mapStyle}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            // **** Action dispatched to Save the Map instance in Redux Store's mapObject.
            //*** This instance will be used to manipulate the map outside of the map DOM
            this.props.dispatch(setMapObject(map));
            this.props.renderTrails(map, maps);
            this.props.renderMarkers(map, maps);
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
    center: mapConfig.center,
    zoom: mapConfig.zoom,
    mapStyle: mapConfig.mapStyle,
    clickOnMarker: mapConfig.clickOnMarker,
    renderMarkers: mapConfig.renderMarkers,
    renderTrails: mapConfig.renderTrails
  };
};

export default connect(mapStateToProps)(TrailMap);
