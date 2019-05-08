export const SELECTED_MARKER = { type: "SELECTED_MARKER", marker: null };
export const OPEN_POPUP = {
  type: "OPEN_POPUP",
  payload: { opened: false, monument: null }
};

export function selectMarker(marker) {
  return { type: "SELECTED_MARKER", marker };
}

export function openPopup(popupIsOpen) {
  if (popupIsOpen) {
    popupIsOpen = false;
    return { type: "OPEN_POPUP", popupIsOpen };
  } else {
    return { type: "OPEN_POPUP", popupIsOpen };
  }
}
