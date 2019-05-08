import { standard1 } from "../../../resources/map/styles";

const stylesConfig = {
  mapStyle: {
    styles: standard1,
    minZoom: 14, // 0 is the world map
    maxZoom: 17
  },
  mapContainer: {
    height: "50vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default stylesConfig;
