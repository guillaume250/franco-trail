export function setMapObject(mapObject) {
  return { type: "INITIALIZE_MAP_OBJECT", mapObject };
}

export function setMapsObject(mapsObject) {
  return { type: "INITIALIZE_MAPS_OBJECT", mapsObject };
}
