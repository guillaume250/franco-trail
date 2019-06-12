import store from "../../redux/store";
import places from "../../resources/places";
import attractions from "../../resources/places_attractions";
import api from "../../config/api";
import { renderMarkers } from "./markers";
import { renderTrails } from "./trails";
import { hideAttractions as renderAttractions } from "../renderAttractions";
//import MyLocationIcon from "../../resources/icons/pulse_dot_small.gif";
import { standard1, standard2 } from "../../resources/map/styles";

export const defaut_Settings = {
  center: {
    lat: 44.0949288,
    lng: -70.2230216
  },
  zoom: 15.4
};

const mapConfig = {
  apikey: api.development.key,
  mapObject: {},
  mapsObject: {},
  renderMarkers,
  renderTrails,
  renderAttractions,
  zoomOut: function(map, maps) {
    const currentState = store.getState(); //Access the store to retrieve the map object
    map = currentState.mapConfig.mapObject; //Assigns the map object to the map param
    map.setZoom(defaut_Settings.zoom);
    map.panTo({
      lat: defaut_Settings.center.lat,
      lng: defaut_Settings.center.lng
    });
  },
  getMapObjects: function(callback) {
    const currentState = store.getState();
    const map = currentState.mapConfig.mapObject;
    const maps = currentState.mapConfig.mapsObject;
    return callback(map, maps);
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
        map: null,
        animation: maps.Animation.DROP,
        zIndex: attraction.key,
        title: attraction.name,
        icon: attraction.icon
      });
      let i1 = new maps.InfoWindow({
        content: attraction.name + ": " + attraction.Description
      });

      marker.addListener("click", function() {
        map.setZoom(17);
        map.panTo(marker.getPosition());
        //console.log(place);
        i1.open(map, marker);
      });
      Markers.push(marker);
    });

    if (show) {
      Markers.forEach(function(marker) {
        marker.setMap(map);
      });
    } else {
      Markers.forEach(function(marker) {
        marker.setPosition(null);
        marker.setMap(null);
        marker = null;
      });
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

    var styledMapType = new maps.StyledMapType(standard1.default, {
      name: "Hide businesses"
    });
    map.mapTypes.set("standard1_map", styledMapType);
    map.setMapTypeId("standard1_map");
  },
  MyPositionMarker: null,
  removeMarker: function removeMarker(marker) {
    marker.setPosition(null);
    marker.setMap(null);
    //marker = null;
    console.log(marker);
  },
  showMyLocation: function getLocation(callback, map, maps) {
    const currentState = store.getState();
    map = currentState.mapConfig.mapObject;
    maps = currentState.mapConfig.mapsObject;
    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 5000
    };

    function error(err) {
      if (err.code === 0) {
        callback(
          false,
          "App failed to retrieve the location of the device due to an unknown error."
        );
      } else if (err.code === 1) {
        callback(
          false,
          "App failed to retrieve the location because location permission was denied."
        );
      }
      if (err.code === 2) {
        callback(false, "The location of your device could not be determined.");
      }
      if (err.code === 3) {
        callback(
          false,
          "App is taking too long to retrieve the location of you device. Please refresh your app."
        );
      } else {
        callback(
          false,
          "App failed to retrieve the location of the device. Please Check your internet Connection and Location Permissions"
        );
      }
    }
    function showPosition(position) {
      const MyPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // const MyPosition = {
      //   lat: 44.09149,
      //   lng: -70.219164
      // };
      if (map.getBounds().contains(MyPosition)) {
        let marker = new maps.Marker({
          position: MyPosition,
          //  map: map,
          animation: maps.Animation.BOUNCE,
          title: "My Position"
          //icon: MyLocationIcon
        });
        // map.setZoom(17);
        // map.panTo(marker.getPosition());
        callback(true, "isInBound", marker);
      } else {
        callback(
          false,
          "You are not in Franco Trail Area. You need to be on the trail (or closeby) to view your location"
        );
      }
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, error, options);
    } else {
      callback(false, "Geolocation is not supported by this device.");
    }
  }
};

export default mapConfig;
