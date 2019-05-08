import store from "./index";
import places from "../../resources/places";
import styles from "../../resources/map/styles/standard-1";
import api from "../../config/api";
const state = {
  payload: {},
  selectedMarker: {},
  mapConfig: {
    mapObject: {},
    center: {
      lat: 44.0960371,
      lng: -70.2214903
    },
    apikey: api.project1.key,
    zoom: 15,
    mapStyle: {
      styles,
      minZoom: 14, // 0 is the world map
      maxZoom: 17
    },
    maxZoom: 20,
    mapContainer: {
      height: "50vh",
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    zoomInMarker: function(map, maps, markerID) {
      const currentState = store.getState();
      map = currentState.mapConfig.mapObject;
      places.forEach(function(place) {
        if (place.key === markerID) {
          map.setZoom(17);
          map.panTo({
            lat: Number(place.coordinates.lat),
            lng: Number(place.coordinates.lng)
          });
        }
      });
    },
    renderMarkers: function(map, maps) {
      map.addListener("mouseout", function() {
        map.setZoom(15);
        map.panTo({
          lat: 44.0960371,
          lng: -70.2214903
        });
      });
      places.forEach(function(place) {
        let m1 = new maps.Marker({
          position: new maps.LatLng(
            place.coordinates.lat,
            place.coordinates.lng
          ),
          map,
          animation: maps.Animation.DROP,
          title: place.shortDesc,
          icon: place.icon
          //label: "A"
        });

        let i1 = new maps.InfoWindow({
          content: place.name
        });
        let i2 = new maps.InfoWindow({
          content: place.longDesc
        });
        m1.addListener("mouseover", function() {
          i1.open(map, m1);
        });
        m1.addListener("mouseout", function() {
          i1.close();
        });

        // for more Google Maps API Events see: https://developers.google.com/maps/documentation/javascript/events
        m1.addListener("click", function() {
          map.setZoom(17);
          map.panTo(m1.getPosition());
          //console.log(place);
          //i2.open(map, m1);
        });
      });
    }
  }
};

export default state;
