import store from "../../../redux/store";
import attractions from "../../../resources/places_attractions";

const currentState = store.getState();
let map = currentState.mapConfig.mapObject;
let maps = currentState.mapConfig.mapsObject;
let Markers = [];
attractions.forEach(function(attraction) {
  let marker = new maps.Marker({
    position: attraction.coordinates,
    map: map,
    visible: true,
    icon: attraction.icon,
    title: "Hello World!"
  });
  Markers.push(marker);
});
export default Markers;
