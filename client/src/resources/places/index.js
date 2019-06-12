//All major places/Momuments in the Franco Trail
const places = [
  {
    key: 1,
    name: `St-Peter & Paul basilica`,
    shortDesc: `founded in 1870, is the oldest parish...`,
    longDesc: `St-Peter & Paul basilica. Saints Peter and Paul Basilica, founded in 1870, is the oldest parish for the French-speaking Catholics in the Diocese of Portland. The history of Saints Peter and Paul parish isn't just the chronicle of an old church, but of the amazing faith of the French immigrants whose struggles, patience, and great generosity built it.`,
    coordinates: { lat: `44.098162`, lng: `-70.212383` },
    icon: require("./places_icons/BasilicaInBlueCircleWEB.svg"),
    thumbnail: require("./places_photographs/basilica.JPG"),
    photos: [
      require("./places_photographs/basil2.jpg"),
      require("./places_photographs/basil1.jpg"),
      require("./places_photographs/basil0.jpg")
    ],
    hasContact: true,
    contactField: {
      type: "Website",
      contact: "https://princeofpeace.me/",
      Label: "www.princeofpeace.me"
    },
    addressField: {
      type: "Address",
      contact: "122 Ash Street, Lewiston, ME"
    }
  },
  {
    key: 2,
    name: `Museum L-A`,
    shortDesc: `connects generations and cultures,...`,
    longDesc: `The Museum L-A. Museum L-A connects generations and cultures, fosters a spirit of discovery and human ingenuity, and helps people experience the rich history and heritage of work, the arts and community.`,
    coordinates: { lat: `44.095368`, lng: `-70.218439` },
    icon: require("./places_icons/MuseumLABlueCircleWEB.svg"),
    thumbnail: require("./places_photographs/4.jpg"),
    photos: [
      require("./places_photographs/IMG_3286.jpg"),
      require("./places_photographs/2.jpg"),
      require("./places_photographs/KidsMay16IMG_5075.jpg")
    ],
    hasContact: true,
    contactField: {
      type: "Website",
      contact: "https://www.museumla.org/",
      Label: "www.museumla.org"
    },
    addressField: {
      type: "Address",
      contact: "35 Canal Street, Box A7 Lewiston, ME"
    }
  },
  {
    key: 3,
    name: `Gendron Franco Center`,
    shortDesc: `Originally the Church of St. Mary serving the Canadian...`,
    longDesc: `Gendron-Franco héritage centre. Originally the Church of St. Mary serving the Canadian-French Catholic community of Little Canada, this establishment is now the Franco-Gendron center hosting musical and theatrical performances of all kinds.`,
    coordinates: { lat: `44.091490`, lng: `-70.219164` },
    icon: require("./places_icons/FrancoCenterIconOneWEB.svg"),
    thumbnail: require("./places_photographs/og/franco center.jpg"),
    photos: [
      require("./places_photographs/gendron-2.jpg"),
      require("./places_photographs/1franco center.jpg"),
      require("./places_photographs/gendron-0.jpg")
    ],
    hasContact: true,
    contactField: {
      type: "Website",
      contact: "http://www.francocenter.org/",
      Label: "www.francocenter.org"
    },
    addressField: {
      type: "Address",
      contact: "46 Cedar Street Lewiston, ME 04240"
    }
  },

  {
    key: 4,
    name: `The Foot Bridge`,
    shortDesc: `A symbol of collaboration between the two sister...`,
    longDesc: `Le Pont-Piéton. A symbol of collaboration between the two sister cities, a paved path follows the perimeter of the park, crossing the pedestrian bridge, formerly a railway bridge, and leads to Bonney Park in Auburn.`,
    coordinates: { lat: `44.092621`, lng: `-70.224027` },
    icon: require("./places_icons/TrestleBridgeCartoon.svg"),
    thumbnail: require("./places_photographs/og/pedestrian bridge.jpg"),
    photos: [
      require("./places_photographs/simard-payne park bridge.jpg"),
      require("./places_photographs/pedestrian bridge1.jpg"),
      require("./places_photographs/pieton1.jpg")
    ],
    hasContact: false,
    contactField: {
      type: "",
      contact: "",
      Label: ""
    },
    addressField: {
      type: "",
      contact: ""
    }
  },
  {
    key: 5,
    name: `Little Canada`,
    shortDesc: `Built between 1866 and 1916, in order to accommodate...`,
    longDesc: `Little Canada. Built between 1866 and 1916, in order to accommodate the influx of French-Canadian immigrants, this
neighborhood was full of large families always having the desire to celebrate.`,
    coordinates: { lat: `44.090029`, lng: `-70.218838` },
    icon: require("./places_icons/FleurDeLisBlueIcon.svg"),
    thumbnail: require("./places_photographs/og/little canada.JPG"),
    photos: [require("./places_photographs/little canada.JPG")],
    hasContact: false,
    contactField: {
      type: "",
      contact: "",
      Label: ""
    },
    addressField: {
      type: "",
      contact: ""
    }
  },
  {
    key: 5.6,
    name: `New Auburn`,
    shortDesc: `The Barker Mill was a catalyst for the residential...`,
    longDesc: `The Barker Mill was a catalyst for the residential development of what became known as “New Auburn.”
New Auburns’ proximity to Lewiston, specifically Little Canada, prompted the building of the “South
Bridge” (renamed Lown Peace Bridge) which offered additional employment opportunities and
connections to a growing Franco-American community.`,
    coordinates: { lat: `44.087287`, lng: `-70.223293` },
    icon: require("./places_icons/FleurDeLisYellowIconWEB.svg"),
    thumbnail: require("./places_photographs/New Auburn.PNG"),
    photos: [
      require("./places_photographs/New Auburn.PNG"),
      require("./places_photographs/New auburn1.PNG"),
      require("./places_photographs/New auburn2.PNG")
    ],
    hasContact: false,
    contactField: {
      type: "",
      contact: "",
      Label: ""
    },
    addressField: {
      type: "",
      contact: ""
    }
  },
  {
    key: 6,
    name: `The Great Falls`,
    shortDesc: `These falls are the perfect picture between industry and nature...`,
    longDesc: `These falls are the perfect picture between industry and nature. Admire the strength of the water that has fueled the economy of these cities.`,
    coordinates: { lat: `44.099793`, lng: `-70.222612` },
    icon: require("./places_icons/WaterfallIconCartoonWEB.svg"),
    thumbnail: require("./places_photographs/falls.jpg"),
    photos: [
      require("./places_photographs/falls.jpg"),
      require("./places_photographs/Great Falls-5.jpg"),
      require("./places_photographs/Great Falls-6.JPG")
    ],
    hasContact: false,
    contactField: {
      type: "",
      contact: "",
      Label: ""
    },
    addressField: {
      type: "",
      contact: ""
    }
  },
  {
    key: 7,
    name: `Franco American Collection`,
    shortDesc: `USM’s Franco-American Collection preserves...`,
    longDesc: `The Franco American Collection. USM’s Franco-American Collection preserves and promotes the culture and heritage of Maine’s Franco-American population. It holds a wealth of research materials, and it sponsors a variety of events that celebrate and promote the history and culture of Franco-Americans.`,
    coordinates: { lat: `44.076168`, lng: `-70.171580` },
    icon: require("./places_icons/USMLACBlueCircleWEB.svg"),
    thumbnail: require("./places_photographs/og/usm franco collection.jpg"),
    photos: [],
    hasContact: true,
    contactField: {
      type: "Website",
      contact: "https://usm.maine.edu/franco",
      Label: "www.usm.maine.edu/franco"
    },
    addressField: {
      type: "Address",
      contact: "51 Westminster Street, Lewiston. Room 171"
    }
  }
];

export default places;
