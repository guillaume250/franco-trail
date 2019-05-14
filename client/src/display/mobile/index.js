import React, { Component } from "react";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import Map from "../../components/map";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.body}>
          <Map viewConfig={this.props.viewConfig} />
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
    viewConfig: mapConfig_Mobile
  };
};
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
