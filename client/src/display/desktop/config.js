import { standard1 } from "../../resources/map/styles";

const mapConfig = {
  center: {
    lat: 44.0960371,
    lng: -70.2214903
  },
  zoom: 15,
  mapStyle: {
    styles: standard1.default,
    minZoom: 14, // 0 is the world map
    maxZoom: 17
  },
  mapContainer: {
    height: "80vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default mapConfig;
