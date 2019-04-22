//This file contains the core configurations of the map
import styles from "./styles";
import api from "../../config/api";

export const center = {
  lat: 44.09732665,
  lng: -70.2145668
};

export const config = {
  apikey: api.project1.key,
  zoom: 15,
  styles,
  mapStyle: {
    styles,
    minZoom: 14, // 0 is the world map
    maxZoom: 20
  },
  maxZoom: 20,
  mapContainer: { height: "50vh", width: "100%" }
};
