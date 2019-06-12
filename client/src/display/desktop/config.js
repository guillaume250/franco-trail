import { standard1 } from "../../resources/map/styles";

const mapConfig = {
  center: {
    lat: 44.0949288,
    lng: -70.2230216
  },
  zoom: 15.6,
  setStyle: function(map) {},
  mapStyle: {
    styles: standard1.default
    // minZoom: 14, // 0 is the world map
    // maxZoom: 17
  },
  mapContainer: {
    height: "75vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
    marginRight: "5px"
  },
  SideMenu: {
    height: "80vh"
  }
};

export default mapConfig;
