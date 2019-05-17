import store from "../../redux/store";
import places from "../../resources/places";
import attractions from "../../resources/places_attractions";
import api from "../../config/api";
import { renderMarkers } from "./markers";
import { renderTrails } from "./trails";
import { standard0, standard2 } from "../../resources/map/styles";

export const defaut_Settings = {
  center: {
    lat: 44.0960371,
    lng: -70.2214903
  },
  zoom: 15.6
};

const mapConfig = {
  apikey: api.development.key,
  mapObject: {},
  mapsObject: {},
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
  ShowOrHide_H_A: function(show, map, maps) {
    const currentState = store.getState();
    map = currentState.mapConfig.mapObject;
    maps = currentState.mapConfig.mapsObject;
    let Markers = [];
    attractions.forEach(function(attraction) {
      let marker = new maps.Marker({
        position: attraction.coordinates,
        map: map,
        animation: maps.Animation.DROP,
        zIndex: attraction.key,
        title: attraction.name,
        icon: attraction.icon
      });
      Markers.push(marker);
    });

    if (show) {
      Markers.forEach(function(marker) {
        marker.setMap(map);
        console.log(map);
      });
    } else {
      Markers.forEach(function(marker) {
        marker.setMap(null);
        marker.setPosition(null);
        marker = null;
        console.log("Null");
      });
      map.panBy(0, 0);
    }
  },
  showBusinesses: function(map, maps) {
    const currentState = store.getState();
    map = currentState.mapConfig.mapObject;
    maps = currentState.mapConfig.mapsObject;

    var styledMapType = new maps.StyledMapType(standard2.default, {
      name: "Show businesses"
    });
    map.mapTypes.set("standard2_map", styledMapType);
    map.setMapTypeId("standard2_map");
  },
  hideBusinesses: function(map, maps) {
    const currentState = store.getState();
    map = currentState.mapConfig.mapObject;
    maps = currentState.mapConfig.mapsObject;

    var styledMapType = new maps.StyledMapType(standard0.default, {
      name: "Hide businesses"
    });
    map.mapTypes.set("standard0_map", styledMapType);
    map.setMapTypeId("standard0_map");
  },
  showMyLocation: function getLocation(callback, map, maps) {
    const currentState = store.getState();
    map = currentState.mapConfig.mapObject;
    maps = currentState.mapConfig.mapsObject;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    function showPosition(position) {
      // const myInPosition = {
      //   lat: 44.093075,
      //   lng: -70.220019
      // }; // A test inbound Position
      const MyPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      if (map.getBounds().contains(MyPosition)) {
        let marker = new maps.Marker({
          position: MyPosition,
          map: map,
          animation: maps.Animation.DROP,
          title: "My Position"
          //  icon: attraction.icon,
        });
        map.setZoom(17);
        map.panTo(marker.getPosition());
        callback(true);
      } else {
        callback(false);
      }
    }
  }
};

export default mapConfig;
