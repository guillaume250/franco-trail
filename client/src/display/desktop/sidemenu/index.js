import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import { connect } from "react-redux";
import { showBusinesses, hideBusinesses } from "../actions";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";

import List from "./list";

class App extends Component {
  constructor(props) {
    super(props);
    //  this.handleClose = this.handleClose.bind(this);
    this.state = {
      ShowOtherPlaces: false,
      showMyLocation: false,
      myLocation: {}
    };
  }

  handleShowOtherPlaces = () => {
    //this.props.handleMyLocation(null, null, data.key);
    if (this.state.ShowOtherPlaces) {
      this.setState({ ShowOtherPlaces: false });
      console.log(this.state.ShowOtherPlaces);

      this.props.dispatch(hideBusinesses());
    } else {
      this.setState({ ShowOtherPlaces: true });
      console.log(this.state.ShowOtherPlaces);

      this.props.dispatch(showBusinesses());
    }
  };
  handleMyLocation = (e, data) => {
    //this.props.handleMyLocation(null, null, data.key);
    if (this.state.showMyLocation) {
      this.setState({ showMyLocation: false });
    } else {
      this.setState({ showMyLocation: true });
    }
  };

  render() {
    return (
      <Col span={12}>
        <Row>
          <Paper style={styles.sidemenu}>
            <InputLabel style={styles.Title1_Title}>
              {"Main Attractions"}
            </InputLabel>
            <GridList>
              <List />
            </GridList>
          </Paper>
        </Row>

        <Row>
          <Paper style={styles.interactionButtons}>
            <Row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.showhistorical}
                    onChange={this.handleshowhistorical}
                    value={this.state.showhistorical}
                    color="primary"
                  />
                }
                label={"Show historical attractions"}
              />
            </Row>

            <Row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.ShowOtherPlaces}
                    onChange={this.handleShowOtherPlaces}
                    value={this.state.ShowOtherPlaces}
                    color="primary"
                  />
                }
                label="Show Restaurants, parkings, hotels and other businesses"
              />
            </Row>

            <Row>
              <FormControlLabel
                style={{ color: "white" }}
                control={
                  <Radio
                    checked={this.state.showMyLocation}
                    onChange={this.handleMyLocation}
                    value={this.state.showMyLocation}
                    name="radio-button-demo"
                    aria-label="Show my location"
                    color="primary"
                  />
                }
                label="Show my location"
              />
            </Row>
          </Paper>
        </Row>
      </Col>
    );
  }
}
const mapStateToProps = state => {
  const { mapConfig } = state; // the state object comes from Redux store
  const { mapConfig_Desktop } = state; // the state object comes from Redux store

  return {
    clickOnMarker: mapConfig.clickOnMarker,
    viewConfig: mapConfig_Desktop
  };
};

export default connect(mapStateToProps)(App);

const styles = {
  interactionButtons: {
    flex: "1",
    backgroundColor: "#D7E4F4",
    paddingTop: "15px",
    marginTop: "10px",
    marginLeft: "10px",
    paddingLeft: "20px",
    marginRight: "20px",
    height: "170px"
  },
  contactus: {
    color: "white"
  },
  Title1: {
    flex: "1",
    color: "black",
    backgroundColor: "#E1D31F",
    paddingTop: "15px",
    paddingLeft: "10px",
    marginTop: "10px",
    marginLeft: "10px",
    height: "50px",
    marginRight: "20px",
    textAlign: "center"
  },
  Title1_Title: {
    marginLeft: "35px",
    marginBottom: "35px",
    color: "black",
    fontSize: 22,
    fontWeight: 900,
    fontFamily: "'Arial Black', Gadget, sans-serif"
  },
  Title2: {
    color: "black",
    backgroundColor: "#E1D31F",
    paddingTop: "15px",
    paddingLeft: "10px",
    marginTop: "10px",
    marginLeft: "10px",
    height: "50px",
    marginRight: "30px",
    verticalAlign: "middle",
    textAlign: "center"
  },
  sidemenu: {
    flex: "1",
    backgroundColor: "#ece070",
    padding: "10px",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "20px",
    height: "55vh"
  }
};
