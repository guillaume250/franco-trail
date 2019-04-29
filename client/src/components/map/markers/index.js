//import React from "react";
import places from "../../../resources/places";

export function renderMarkers(map, maps) {
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
      if (i1 || i2) {
        i1.close();
        i2.close();
      }
      console.log(place);
      i2.open(map, m1);
    });
  });
}
// class Markers extends React.Component {
//   onClick = () => {
//     this.child.handleClickOpen(); // do stuff
//   };
//   render() {
//     return (
//       <div>
//         {places.map(place => (
//           <div
//             lat={place.coordinates.lat}
//             lng={place.coordinates.lng}
//             text="asdasdY"
//           />
//         ))}
//       </div>
//     );
//   }
// }
//
// export default Markers;
