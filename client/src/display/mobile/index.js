import React, { Component } from "react";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import Map from "../../components/map";
import MapControlButtons from "../../display/desktop/sidemenu/mapControls";

import { Row, Col } from "react-simple-flex-grid";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.body}>
          <Map viewConfig={this.props.mapConfig_Mobile} />
          {/*<MapControlButtons />*/}
          <Carousel />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { mapConfig } = state; // the state object comes from Redux store
  const { mapConfig_Mobile } = state; // the state object comes from Redux store

  return {
    clickOnMarker: mapConfig.clickOnMarker,
    mapConfig_Mobile: mapConfig_Mobile
  };
};
export default connect(mapStateToProps)(App);

const styles = {
  container: {
    flex: 1
  },

  body: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: "3%",
    paddingRight: "3%",
    marginTop: 70
  }
};
