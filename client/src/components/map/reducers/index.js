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
  } else {
    return state;
  }
}
export default mapConfig; //The piece of the state managed by the map component
