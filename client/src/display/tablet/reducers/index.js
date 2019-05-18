import mapConfigs from "../config"; //This represents the initial Map state
//import { standard0, standard2 } from "../../../resources/map/styles";
function mapConfig(state = mapConfigs, action) {
  if (action.type === "SHOW_BUSINESSES") {
    const updatedState = Object.assign({}, state, {
      mapObject: action.mapObject
    });
    return updatedState;
  } else if (action.type === "SHOW_BUSINESSES") {
    const updatedState = Object.assign({}, state, {
      mapObject: action.mapObject
    });
    return updatedState;
  } else {
    return state;
  }
}
export default mapConfig; //The piece of the state managed by the map component
