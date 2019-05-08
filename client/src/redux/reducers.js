import { combineReducers } from "redux";
import initialState from "./store/initialState";

function mapConfig(state = initialState.mapConfig, action) {
  if (action.type === "SET_MAP_OBJECT") {
    const updatedState = Object.assign({}, state, {
      mapObject: action.mapObject
    });
    return updatedState;
  } else {
    return state;
  }
}
const reducers = combineReducers({ mapConfig });
export default reducers;
