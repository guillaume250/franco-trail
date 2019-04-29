//This file contains the core configurations of the map
import styles from "../resources/map/styles/standard-1";
import api from "./api";

export const center = {
  lat: 44.0960371,
  lng: -70.2214903
};

export const config = {
  apikey: api.project1.key,
  zoom: 15,
  styles,
  mapStyle: {
    styles,
    minZoom: 14.54, // 0 is the world map
    maxZoom: 17.54
  },
  maxZoom: 20,
  mapContainer: { height: "50vh", width: "100%" }
};
