import React, { Component } from "react";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import Map from "../../components/map";

import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileOpen: false };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !this.state.mobileOpen }));
  };
  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Header />
        <div style={styles.body}>
          <Map viewConfig={this.props.mapConfig_Mobile} />
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
