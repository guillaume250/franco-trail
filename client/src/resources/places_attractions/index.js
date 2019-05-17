import icon from "./icon.svg";
import ico5 from "./ico10.png";

const attractions = [
  {
    key: 1,
    name: `Hotel de Ville`,
    Description: `The « Wall of Mayors » on the first floor includes Lewiston’s first Franco American mayor; Dr. Robert J.
Wiseman, born in Quebec and married to a French Canadian woman; Rose Cyr.`,
    coordinates: { lat: 44.095176, lng: -70.21564 },
    icon: icon
  },
  {
    key: 2,
    name: `SIMARD-PAYNE MEMORIAL PARK`,
    Description: `Railroad Park was officially renamed Simard/Payne Memorial Park to honor two Lewiston police officers
killed in the line of duty. Once in Auburn, the paved trail known as Auburn’s Riverwalk Trail, continues
along the Androscoggin River toward the Great Falls.`,
    coordinates: { lat: 44.094011, lng: -70.222203 },
    icon: ico5
  },
  {
    key: 3,
    name: `The Canal`,
    Description: `The canal, built primarily by Irish immigrants in 1945, had increased Lewiston&#39;s industrial potential as a
textile city. Diverting water from the Androscoggin River, the canal provided the necessary energy to run
the mills.`,
    coordinates: { lat: 44.094596, lng: -70.217593 },
    icon: ico5
  }
];

export default attractions;
