import store from "../../redux/store";
import places from "../../resources/places";
import styles from "./styles";
import api from "../../config/api";
import { renderMarkers } from "./markers";
import { renderTrails } from "./trails";
import { standard0 } from "../../resources/map/styles";
const defaut_Settings = {
  center: {
    lat: 44.0960371,
    lng: -70.2214903
  },
  zoom: 15
};
const mapConfig = {
  apikey: api.development.key,
  mapObject: {},
  center: {
    lat: defaut_Settings.center.lat,
    lng: defaut_Settings.center.lng
  },
  zoom: defaut_Settings.zoom,
  maxZoom: 20,
  styles: standard0,
  mapContainer: styles.mapContainer,
  renderMarkers,
  renderTrails,
  zoomOut: function(map, maps) {
    const currentState = store.getState(); //Access the store to retrieve the map object
    map = currentState.mapConfig.mapObject; //Assigns the map object to the map param
    map.setZoom(defaut_Settings.zoom);
    map.panTo({
      lat: defaut_Settings.center.lat,
      lng: defaut_Settings.center.lng
    });
  },
  clickOnMarker: function(map, maps, markerID) {
    const currentState = store.getState(); //Access the store to retrieve the map object
    map = currentState.mapConfig.mapObject; //Assigns the map object to the map param
    console.log(currentState);

    places.forEach(function(place) {
      if (place.key === markerID) {
        map.setZoom(17);
        map.panTo({
          lat: Number(place.coordinates.lat),
          lng: Number(place.coordinates.lng)
        });
      }
    });
  }
};

export default mapConfig;
