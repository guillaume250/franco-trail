import attractions from "../../resources/places_attractions";

export function hideAttractions(map, maps) {
  return null;
}
export function showAttractions(map, maps) {
  attractions.forEach(function(attraction) {
    let marker = new maps.Marker({
      position: attraction.coordinates,
      map: map,
      visible: true,
      icon: attraction.icon,
      title: "Hello World!"
    });
  });
}
