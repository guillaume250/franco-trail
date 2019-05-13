import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import Map from "../../components/map";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import List from "./list";
class App extends Component {
  render() {
    return (
      <Row>
        <Col span={4}>
          <Paper style={styles.sidemenu}>
            <GridList>
              <List />
            </GridList>
          </Paper>
        </Col>
        <Col span={8}>
          <div style={styles.mapContainer}>
            <Map />
          </div>
        </Col>
      </Row>
    );
  }
}

export default App;

const styles = {
  sidemenu: {
    padding: "10px",
    marginTop: "10px",
    marginRight: "20px",
    height: "50vh"
  },
  mapContainer: { padding: "10px", marginRight: "20px" },
  body: {
    flex: 1,
    paddingLeft: "3%",
    paddingRight: "3%",
    marginTop: 100
  }
};
