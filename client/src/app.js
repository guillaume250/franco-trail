import React, { Component } from "react";
import Header from "./components/header";
import Carousel from "./components/carousel";
import TrailMap from "./components/map";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.body}>
          <TrailMap />
          <Carousel />
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
