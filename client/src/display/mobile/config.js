import { standard0 } from "../../resources/map/styles";

const mapConfig = {
  center: {
    lat: 44.0960371,
    lng: -70.2214903
  },
  zoom: 15,
  setStyle: function(map) {},
  mapStyle: {
    styles: standard0,
    minZoom: 14, // 0 is the world map
    maxZoom: 17
  },
  mapContainer: {
    height: "60vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default mapConfig;
