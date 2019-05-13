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
    { lat: 44.093561, lng: -70.225986 }, //Elm St > Main St >
    { lat: 44.091899, lng: -70.226106 },
    { lat: 44.092279, lng: -70.225041 },
    { lat: 44.092951, lng: -70.223054 },
    { lat: 44.092996, lng: -70.222815 },
    { lat: 44.093536, lng: -70.221157 },
    { lat: 44.093686, lng: -70.221187 },
    { lat: 44.093804, lng: -70.220853 },
    { lat: 44.091448, lng: -70.219387 },
    { lat: 44.09149, lng: -70.219164 }, //Franco Center
    { lat: 44.091448, lng: -70.219387 },
    { lat: 44.092778, lng: -70.220212 },
    { lat: 44.093732, lng: -70.217263 },
    { lat: 44.094757, lng: -70.217879 },
    { lat: 44.095226, lng: -70.2164 }
  ];

  //Walking Trail From the Great Falls to Little Canada
  let trail4Routes = [
    { lat: 44.100333, lng: -70.223048 },
    { lat: 44.100385, lng: -70.223101 },
    { lat: 44.100381, lng: -70.223229 },
    { lat: 44.100422, lng: -70.223536 },
    { lat: 44.100621, lng: -70.224044 },
    { lat: 44.1006, lng: -70.224298 },
    { lat: 44.100426, lng: -70.224594 },
    { lat: 44.100295, lng: -70.224711 },
    { lat: 44.100255, lng: -70.22471 },
    { lat: 44.099465, lng: -70.22441 },
    { lat: 44.099187, lng: -70.224306 },
    { lat: 44.098981, lng: -70.224191 },
    { lat: 44.098381, lng: -70.223963 },
    { lat: 44.098113, lng: -70.223877 },
    { lat: 44.09744, lng: -70.223928 },
    { lat: 44.097296, lng: -70.223966 },
    { lat: 44.097057, lng: -70.224215 },
    { lat: 44.096781, lng: -70.22432 },
    { lat: 44.096569, lng: -70.224276 },
    { lat: 44.096409, lng: -70.22435 },
    { lat: 44.096205, lng: -70.224594 },
    { lat: 44.095355, lng: -70.224809 },
    { lat: 44.095157, lng: -70.224769 },
    { lat: 44.094789, lng: -70.224801 },
    { lat: 44.094637, lng: -70.225025 },
    { lat: 44.094467, lng: -70.225024 },
    { lat: 44.09432, lng: -70.225032 },
    { lat: 44.093842, lng: -70.225189 },
    { lat: 44.0936, lng: -70.225313 },
    { lat: 44.093448, lng: -70.225317 },
    { lat: 44.093448, lng: -70.225317 },
    { lat: 44.092537, lng: -70.225092 },
    { lat: 44.092307, lng: -70.225019 },
    { lat: 44.092304, lng: -70.224953 },
    { lat: 44.092951, lng: -70.223054 },
    { lat: 44.092996, lng: -70.222815 },
    { lat: 44.093536, lng: -70.221157 },
    { lat: 44.093686, lng: -70.221187 },
    { lat: 44.093804, lng: -70.220853 },
    { lat: 44.091448, lng: -70.219387 },
    { lat: 44.090216, lng: -70.218593 }
    //  { lat: 44.09149, lng: -70.219164 }
  ];
  let trail5Routes = [
    // The New Auburn
    { lat: 44.09228, lng: -70.225031 }, //Bonny Park to NewBury Street
    { lat: 44.091192, lng: -70.224567 },
    { lat: 44.09108, lng: -70.224465 },
    { lat: 44.089447, lng: -70.223712 },
    { lat: 44.088904, lng: -70.22585 },
    { lat: 44.089492, lng: -70.226199 },
    { lat: 44.090316, lng: -70.22621 },
    { lat: 44.091899, lng: -70.226107 }
  ];
  const trail1 = new maps.Polyline({
    path: trail1Routes,
    trail2Routes,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 0.5,
    strokeWeight: 8
  });
  //   path: trail1Routes,
  //   trail2Routes,
  //   geodesic: true,
  //   strokeOpacity: 0,
  //   icons: [
  //     {
  //       icon: lineSymbol,
  //       offset: "0",
  //       repeat: "20px"
  //     }
  //   ],
  //   strokeWeight: 8
  // });
  const trail2 = new maps.Polyline({
    path: trail2Routes,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 0.5,
    strokeWeight: 8
  });
  const trail3 = new maps.Polyline({
    path: trail3Routes,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 0.5,
    strokeWeight: 8
  });
  const trail4 = new maps.Polyline({
    path: trail4Routes,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 0.5,
    strokeWeight: 8
  });
  const trail5 = new maps.Polyline({
    path: trail5Routes,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 0.5,
    strokeWeight: 8
  });
  trail1.setMap(map);
  trail2.setMap(map);
  trail3.setMap(map);
  trail4.setMap(map);
  trail5.setMap(map);
}

// var lineSymbol = {
//   path: "M 0,-1 0,1",
//   strokeOpacity: 1,
//   scale: 4
// };
