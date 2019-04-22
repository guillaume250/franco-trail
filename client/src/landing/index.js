import React, { Component } from "react";
import Header from "./header";
import TrailMap from "./map";

import styles from "./styles";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.body}>
          <TrailMap />
        </div>
      </div>
    );
  }
}

export default App;
