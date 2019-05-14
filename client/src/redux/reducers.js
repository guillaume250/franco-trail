import { combineReducers } from "redux";
import mapConfig from "../components/map/reducers";
import mapConfig_Desktop from "../display/desktop/reducers";
import mapConfig_Mobile from "../display/mobile/reducers";

const reducers = combineReducers({
  mapConfig,
  mapConfig_Desktop,
  mapConfig_Mobile
});
export default reducers;
