export function setMapObject(mapObject) {
  return { type: "INITIALIZE_MAP_OBJECT", mapObject };
}

export function setMapsObject(mapsObject) {
  return { type: "INITIALIZE_MAPS_OBJECT", mapsObject };
}

export function hideMyPosition(marker, map) {
  return { type: "HIDE_MY_POSITION", payload: { marker, map } };
}
export function showMyPosition(marker, map) {
  return { type: "SHOW_MY_POSITION", payload: { marker, map } };
}
