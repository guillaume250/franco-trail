import React, { Component } from "react";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Map from "./components/map";
import places from "./resources/places";
import { center, config } from "./config/map_config";

class App extends Component {
  constructor(props) {
    super(props);
    this.renderMarkers = this.renderMarkers.bind(this);
    this.state = { center: center, zoom: config.zoom };
  }
  renderMarkers(map, maps) {
    const consts = this.state;
    map.addListener("mouseout", function(consts) {
      console.log(consts.zoom);
      console.log("this.state.zoom");
      map.setZoom(config.zoom);
      map.panTo(center);
    });
    places.forEach(function(place) {
      let m1 = new maps.Marker({
        position: new maps.LatLng(place.coordinates.lat, place.coordinates.lng),
        map,
        animation: maps.Animation.DROP,
        title: place.shortDesc,
        icon: place.icon
        //label: "A"
      });
      let i1 = new maps.InfoWindow({
        content: place.name
      });
      let i2 = new maps.InfoWindow({
        content: place.longDesc
      });
      m1.addListener("mouseover", function() {
        i1.open(map, m1);
      });
      m1.addListener("mouseout", function() {
        i1.close();
      });
      m1.addListener("click", function() {
        map.setZoom(17);
        map.panTo(m1.getPosition());
        //console.log(place);
        //i2.open(map, m1);
      });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div style={styles.body}>
          <Map
          // style={config.mapContainer}
          // api={config.apikey}
          // center={center}
          // zoom={config.zoom}
          // mapStyle={config.mapStyle}
          // RenderMarkers={this.renderMarkers}
          />
          <Carousel RenderMarkers={this.renderMarkers} />
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    flex: 1,
    flexDirection: "column"
  },

  body: {
    flex: 1,
    paddingLeft: "3%",
    paddingRight: "3%",

    marginTop: 100
  }
};
