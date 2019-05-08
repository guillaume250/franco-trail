import React from "react";
import places from "../../../resources/places";
import { center, config } from "../../../config/map_config";
import ReactDOM from "react-dom";
export function renderMarkers(map, maps) {
  map.addListener("mouseout", function() {
    map.setZoom(config.zoom);
    map.panTo(center);
  });
  places.forEach(function(place) {
    let m1 = new maps.Marker({
      position: new maps.LatLng(place.coordinates.lat, place.coordinates.lng),
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
