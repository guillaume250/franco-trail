//All major places/Momuments in the Franco Trail
const places = [
  {
    key: 1,
    name: `Gendron-Franco héritage centre`,
    shortDesc: `Originally the Church of St. Mary serving the Canadian...`,
    longDesc: `<h4>Gendron-Franco héritage centre</h4><p>Originally the Church of St. Mary serving the Canadian-French Catholic community of Little Canada, this establishment is now the Franco-Gendron center hosting musical and theatrical performances of all kinds.</p>`,
    coordinates: { lat: `44.091490`, lng: `-70.219164` },
    icon: require("./places_icons/FrancoCenterIconOneWEB.svg"),
    thumbnail: require("./places_photographs/gendron-1.jpg"),
    photos: [
      require("./places_photographs/gendron.jpg"),
      require("./places_photographs/gendron-2.jpg")
    ]
  },
  {
    key: 2,
    name: `Museum L-A`,
    shortDesc: `connects generations and cultures,...`,
    longDesc: `<h4>The Museum L-A</h4><p>Museum L-A connects generations and cultures, fosters a spirit of discovery and human ingenuity, and helps people experience the rich history and heritage of work, the arts and community.</p>`,
    coordinates: { lat: `44.095368`, lng: `-70.218439` },
    icon: require("./places_icons/MuseumLABlueCircleWEB.svg"),
    thumbnail: require("./places_photographs/museumLA.jpg"),
    photos: [
      require("./places_photographs/basilica.JPG"),
      require("./places_photographs/museumLA.jpg")
    ]
  },
  {
    key: 3,
    name: `St-Peter & Paul basilica`,
    shortDesc: `founded in 1870, is the oldest parish...`,
    longDesc: `<h4>St-Peter & Paul basilica</h4><p>Saints Peter and Paul Basilica, founded in 1870, is the oldest parish for the French-speaking Catholics in the Diocese of Portland. The history of Saints Peter and Paul parish isn't just the chronicle of an old church, but of the amazing faith of the French immigrants whose struggles, patience, and great generosity built it.</p>`,
    coordinates: { lat: `44.098500`, lng: ` -70.212498` },
    icon: require("./places_icons/BasilicaInBlueCircleWEB.svg"),
    thumbnail: require("./places_photographs/basilica.JPG"),
    photos: [
      require("./places_photographs/basilica.JPG"),
      require("./places_photographs/museumLA.jpg")
    ]
  },
  {
    key: 4,
    name: `Le Pont-Piéton`,
    shortDesc: `A symbol of collaboration between the two sister...`,
    longDesc: `<h4>Le Pont-Piéton</h4><p>A symbol of collaboration between the two sister cities, a paved path follows the perimeter of the park, crossing the pedestrian bridge, formerly a railway bridge, and leads to Bonney Park in Auburn.</p>`,
    coordinates: { lat: `44.092621`, lng: `-70.224027` },
    icon: require("./places_icons/PontPietonBlueCircleWEB.svg"),
    thumbnail: require("./places_photographs/pieton1.jpg"),
    photos: [
      require("./places_photographs/basilica.JPG"),
      require("./places_photographs/museumLA.jpg")
    ]
  },
  {
    key: 5,
    name: `The Great Falls`,
    shortDesc: `these falls are the perfect picture between industry and nature...`,
    longDesc: `<h4>Les Chutes (Great Falls)</h4><p>It will make your Instagram followers jealous; these falls are the perfect picture between industry and nature. Admire the strength of the water that has fueled the economy of these cities.</p>`,
    coordinates: { lat: `44.099793`, lng: `-70.222612` },
    icon: require("./places_icons/WaterfallIconWEB.svg"),
    thumbnail: require("./places_photographs/falls.jpg"),
    photos: [
      require("./places_photographs/basilica.JPG"),
      require("./places_photographs/museumLA.jpg")
    ]
  },
  {
    key: 6,
    name: `Franco American Collection`,
    shortDesc: `USM’s Franco-American Collection preserves...`,
    longDesc: `<h4>The Franco American Collection</h4><p>USM’s Franco-American Collection preserves and promotes the culture and heritage of Maine’s Franco-American population. It holds a wealth of research materials, and it sponsors a variety of events that celebrate and promote the history and culture of Franco-Americans.</p>`,
    coordinates: { lat: `44.076168`, lng: `-70.171580` },
    icon: require("./places_icons/USMLACBlueCircleWEB.svg"),
    thumbnail: require("./places_photographs/USM.jpg"),
    photos: [
      require("./places_photographs/basilica.JPG"),
      require("./places_photographs/museumLA.jpg")
    ]
  },
  {
    key: 7,
    name: `Little Canada`,
    shortDesc: `Built between 1866 and 1916, in order to accommodate...`,
    longDesc: `<h4>Little Canada</h4><p>Built between 1866 and 1916, in order to accommodate the influx of French-Canadian immigrants, this
neighborhood was full of large families always having the desire to celebrate.</p>`,
    coordinates: { lat: `44.090029`, lng: `-70.218838` },
    icon: require("./places_icons/LittleCanadaBlueCircleWEB.svg"),
    thumbnail: require("./places_photographs/canada.jpg"),
    photos: [
      require("./places_photographs/basilica.JPG"),
      require("./places_photographs/museumLA.jpg")
    ]
  }
];

export default places;
