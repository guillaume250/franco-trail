import { combineReducers } from "redux";
import mapConfig from "../components/map/reducers";
import mapConfig_Desktop from "../display/desktop/reducers";

const reducers = combineReducers({ mapConfig, mapConfig_Desktop });
export default reducers;
