import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import { connect } from "react-redux";

import Header from "./header";
import Map from "../../components/map";
import Caroussel from "../../components/carousel";
import SideMenu from "./sidemenu";

class App extends Component {
  render() {
    return (
      <div>
        <Col>
          <Row>
            <Header />
          </Row>
          <Row>
            <Col span={3}>
              <SideMenu />
            </Col>
            <Col span={9}>
              <div style={styles.mapContainer}>
                <Map viewConfig={this.props.viewConfig} />
              </div>
            </Col>
          </Row>
          <Caroussel />
        </Col>
        <Row />
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
