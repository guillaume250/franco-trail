import mapConfigs from "../config"; //This represents the initial Map state
import { standard0, standard2 } from "../../../resources/map/styles";

const showBusinesses = {
  styles: standard2.default,
  minZoom: mapConfigs.minZoom, // 0 is the world map
  maxZoom: mapConfigs.maxZoom
};

const hideBusinesses = {
  styles: standard2.default,
  minZoom: mapConfigs.minZoom, // 0 is the world map
  maxZoom: mapConfigs.maxZoom
};

function mapConfig(state = mapConfigs, action) {
  if (action.type === "SHOW_BUSINESSES") {
    console.log("SHOW_BUSINESSES >>> CAlled");
    const updatedState = Object.assign({}, state, {
      mapStyle: showBusinesses
    });
    return updatedState;
  } else if (action.type === "HIDE_BUSINESSES") {
    console.log("HIDE_BUSINESSES >>> CAlled");

    const updatedState = Object.assign({}, state, {
      mapStyle: hideBusinesses
    });
    return updatedState;
  } else {
    return state;
  }
}
export default mapConfig; //The piece of the state managed by the map component
