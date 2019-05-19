import mapConfigs from "../../config"; //This represents the initial Map state
//import store from "../../../../redux/store";

function mapConfig(state = mapConfigs, action) {
  if (action.type === "SHOW_ATTRACTIONS") {
    const updatedState = Object.assign({}, state, {
      renderAttractions: action.payload
    });
    return updatedState;
  } else if (action.type === "HIDE_ATTRACTIONS") {
    const updatedState = Object.assign({}, state, {
      renderAttractions: action.payload
    });
    return updatedState;
  } else {
    return state;
  }
}
export default mapConfig; //The piece of the state managed by the map component
