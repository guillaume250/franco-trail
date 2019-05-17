import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { setMapObject, setMapsObject } from "./actions";

class TrailMap extends Component {
  render() {
    return (
      <Paper style={this.props.viewConfig.mapContainer} elevation={8}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.api }}
          defaultCenter={this.props.viewConfig.center}
          defaultZoom={this.props.viewConfig.zoom}
          options={this.props.viewConfig.mapStyle}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            // **** Action dispatched to Save the Map instance in Redux Store's mapObject.
            //*** This instance will be used to manipulate the map outside of the map DOM
            this.props.dispatch(setMapObject(map));
            this.props.dispatch(setMapsObject(maps));

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
    mapStyle: mapConfig.mapStyle,
    clickOnMarker: mapConfig.clickOnMarker,
    renderMarkers: mapConfig.renderMarkers,
    renderTrails: mapConfig.renderTrails,
    zoomOut: mapConfig.zoomOut
  };
};

export default connect(mapStateToProps)(TrailMap);
