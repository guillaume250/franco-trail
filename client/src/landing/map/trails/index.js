export function renderTrails(map, maps) {
  let trail1Routes = [
    { lat: 44.097976, lng: -70.211817 }, //Ash St
    { lat: 44.096564, lng: -70.216163 }, // Park St
    { lat: 44.095497, lng: -70.215489 },
    { lat: 44.09604, lng: -70.213793 },
    { lat: 44.094061, lng: -70.212515 },
    { lat: 44.093498, lng: -70.214253 },
    { lat: 44.095497, lng: -70.215489 }
  ];

  let trail2Routes = [
    { lat: 44.093498, lng: -70.214253 },
    { lat: 44.093207, lng: -70.215128 },
    { lat: 44.095226, lng: -70.2164 },
    { lat: 44.095497, lng: -70.215489 }
  ];
  let trail3Routes = [
    { lat: 44.095226, lng: -70.2164 }, //Pine St > Lisbon St
    { lat: 44.098618, lng: -70.218206 }, //Lisbon St > Main St
    { lat: 44.097607, lng: -70.21975 },
    { lat: 44.097464, lng: -70.219998 },
    { lat: 44.097106, lng: -70.22106 },
    { lat: 44.097074, lng: -70.22165 }, //Court St >  Mechanics Row
    { lat: 44.097505, lng: -70.226037 },
    { lat: 44.096308, lng: -70.2262 },
    { lat: 44.096076, lng: -70.226191 },
    { lat: 44.095466, lng: -70.225559 },
    { lat: 44.095331, lng: -70.225454 },
    { lat: 44.094092, lng: -70.225727 },
    { lat: 44.093566, lng: -70.225984 },
    { lat: 44.09256, lng: -70.226066 },
    { lat: 44.092669, lng: -70.228334 },
    { lat: 44.09373, lng: -70.227995 },
    { lat: 44.093561, lng: -70.225986 },
    { lat: 44.091899, lng: -70.226106 },
    { lat: 44.092279, lng: -70.225041 },
    { lat: 44.092951, lng: -70.223054 },
    { lat: 44.092996, lng: -70.222815 },
    { lat: 44.093536, lng: -70.221157 },
    { lat: 44.093686, lng: -70.221187 },
    { lat: 44.093804, lng: -70.220853 },
    { lat: 44.091448, lng: -70.219387 },
    { lat: 44.09149, lng: -70.219164 },
    { lat: 44.091448, lng: -70.219387 },
    { lat: 44.092778, lng: -70.220212 },
    { lat: 44.093732, lng: -70.217263 },
    { lat: 44.094757, lng: -70.217879 },
    { lat: 44.095226, lng: -70.2164 }
  ];
  const trail1 = new maps.Polyline({
    path: trail1Routes,
    trail2Routes,
    geodesic: true,
    strokeColor: "dodgerblue",
    strokeOpacity: 0.5,
    strokeWeight: 8
  });
  const trail2 = new maps.Polyline({
    path: trail2Routes,
    geodesic: true,
    strokeColor: "dodgerblue",
    strokeOpacity: 0.5,
    strokeWeight: 8
  });
  const trail3 = new maps.Polyline({
    path: trail3Routes,
    geodesic: true,
    strokeColor: "dodgerblue",
    strokeOpacity: 0.5,
    strokeWeight: 8
  });
  trail1.setMap(map);
  trail2.setMap(map);
  trail3.setMap(map);
}
