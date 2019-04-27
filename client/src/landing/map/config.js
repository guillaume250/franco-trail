//This file contains the core configurations of the map
import styles from "./styles/standard-1";
import api from "../../config/api";

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
    minZoom: 13, // 0 is the world map
    maxZoom: 20
  },
  maxZoom: 20,
  mapContainer: { height: "50vh", width: "100%" }
};
