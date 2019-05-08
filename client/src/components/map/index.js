import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { center, config } from "../../config/map_config";
import { renderMarkers } from "./markers";
import { renderTrails } from "./trails";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { setMapObject } from "./actions";
class AnyReactComponent extends Component {
  render() {
    return null;
  }
}
class TrailMap extends Component {
  static defaultProps = config.defaultProps;
  GoogleMapApiConfigurations(map, maps) {
    renderMarkers(map, maps);
  }
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
            //this.GoogleMapApiConfigurations(map, maps);
            this.props.dispatch(setMapObject(map));
            renderTrails(map, maps);
            this.props.zoomInMarker(map, maps);
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
    zoomInMarker: mapConfig.zoomInMarker,
    renderMarkers: mapConfig.renderMarkers
  };
};

export default connect(mapStateToProps)(TrailMap);
