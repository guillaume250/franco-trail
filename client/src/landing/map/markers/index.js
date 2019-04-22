import React from "react";
import places from "./places";
import InfoWindow from "../infoBox";

class Parent extends React.Component {
  onClick = () => {
    this.child.handleClickOpen(); // do stuff
  };
  render() {
    return (
      <div>
        <InfoWindow onRef={ref => (this.child = ref)} />
        <button onClick={this.onClick}>InfoWindow.handleClickOpen()</button>
      </div>
    );
  }
}

export function renderMarkers(map, maps) {
  places.forEach(function(place) {
    let m1 = new maps.Marker({
      position: new maps.LatLng(place.coordinates.lat, place.coordinates.lng),
      map,
      animation: maps.Animation.DROP,
      title: place.name
      //icon: place.icon,
      //label: "A"
    });

    let i1 = new maps.InfoWindow({
      content: place.shortDesc
    });
    m1.addListener("mouseover", function() {
      i1.open(map, m1);
    });
    m1.addListener("mouseout", function() {
      i1.close();
    });

    // for more Google Maps API Events see: https://developers.google.com/maps/documentation/javascript/events
    m1.addListener("click", function() {
      console.log(place);
      i1.open(map, m1);
    });
  });
}
