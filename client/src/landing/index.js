import React, { Component } from "react";
import Header from "./header";
import Carousel from "./carousel";
import TrailMap from "./map";

import styles from "./styles";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.body}>
          <TrailMap />
          {/*<Carousel />*/}
        </div>
      </div>
    );
  }
}

export default App;
