import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "./index.css";
import { connect } from "react-redux";

import Header from "./header";
import Map from "../../components/map";
import Caroussel from "../../components/carousel";
import SideMenu from "./sidemenu";
import Partners from "./partners";

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Header />
        </Row>
        <Row className="parent">
          <Col span={3} style={this.props.viewConfig.SideMenu}>
            <SideMenu />
          </Col>
          <Col span={9}>
            <div style={styles.mapContainer}>
              <Map viewConfig={this.props.viewConfig} />
            </div>
          </Col>
        </Row>
        <Row>
          <Caroussel />
        </Row>
        <Row>
          <Partners />
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { mapConfig_Desktop } = state;
  return { viewConfig: mapConfig_Desktop };
};

export default connect(mapStateToProps)(App);

const styles = { mapContainer: { padding: "10px", marginRight: "20px" } };
