import mapConfigs from "../config"; //This represents the initial Map state

function mapConfig(state = mapConfigs, action) {
  if (action.type === "INITIALIZE_MAP_OBJECT") {
    const updatedState = Object.assign({}, state, {
      mapObject: action.mapObject
    });
    return updatedState;
  } else if (action.type === "INITIALIZE_MAPS_OBJECT") {
    const updatedState = Object.assign({}, state, {
      mapsObject: action.mapsObject
    });
    return updatedState;
  } else if (action.type === "HIDE_MY_POSITION") {
    const { marker, map, maps } = action.payload;
    console.log(action.payload);
    marker.setPosition(null);
    marker.setMap(null);
    map.panBy(0, 0);
    maps.event.trigger(map, "resize");
    console.log("maps.event.trigger(map, resize");
    const updatedState = Object.assign({}, state, {
      mapObject: map,
      MyPositionMarker: marker
    });
    console.log(updatedState);
    return updatedState;
  } else if (action.type === "SHOW_MY_POSITION") {
    const { marker, map } = action.payload;
    marker.setMap(map);
    map.setZoom(17);
    map.panTo(marker.getPosition());
    const updatedState = Object.assign({}, state, {
      MyPositionMarker: marker
    });
    return updatedState;
  } else {
    return state;
  }
}
export default mapConfig; //The piece of the state managed by the map component
