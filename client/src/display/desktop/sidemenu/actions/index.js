import {
  showAttractions,
  hideAttractions
} from "../../../../components/renderAttractions";

export function showAttraction_() {
  return { type: "SHOW_ATTRACTIONS", payload: showAttractions };
}
export function hideAttraction_() {
  return { type: "HIDE_ATTRACTIONS", payload: hideAttractions };
}
