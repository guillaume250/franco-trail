import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "react-simple-flex-grid/lib/main.css";
import "./index.css";
import { connect } from "react-redux";

import Header from "./header_";
import Map from "../../components/map";
import Caroussel from "../../components/carousel";
import SideMenu from "./sidemenu";
import Partners from "./partners";
import Footer from "./footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.refreshMap = this.refreshMap.bind(this);
    this.state = { mapRefresher: 0 };
  }
  refreshMap = () => {
    this.setState({ mapRefresher: this.state.mapRefresher + 1 });
    console.log("mapRefresher I: " + this.state.mapRefresher);
  };
  render() {
    return (
      <Col>
        <Row>
          <Header />
        </Row>
        <Row id="mapSection" className="CenterMe">
          <div className="parent">
            <Col span={3} style={this.props.viewConfig.SideMenu}>
              <SideMenu refreshIt={this.refreshMap} />
            </Col>
            <Col span={9} style={styles.mapContainer}>
              <Map viewConfig={this.props.viewConfig} />
            </Col>
          </div>
        </Row>
        <Col>
          <Caroussel />
        </Col>
        <Row>
          <Partners />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Col>
    );
  }
}
const mapStateToProps = state => {
  const { mapConfig_Desktop } = state;
  return { viewConfig: mapConfig_Desktop };
};

export default connect(mapStateToProps)(App);

const styles = {
  mapContainer: { height: "70vh" }
};
