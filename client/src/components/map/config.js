import store from "../../redux/store";
import places from "../../resources/places";
import styles from "./styles";
import api from "../../config/api";
import { renderMarkers } from "./markers";
import { renderTrails } from "./trails";

const mapConfig = {
  apikey: api.development.key,
  mapObject: {},
  center: {
    lat: 44.0960371,
    lng: -70.2214903
  },
  zoom: 15,
  maxZoom: 20,
  mapStyle: styles.mapStyle,
  mapContainer: styles.mapContainer,
  renderMarkers,
  renderTrails,
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
