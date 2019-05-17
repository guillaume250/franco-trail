import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import { connect } from "react-redux";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import Checkbox from "@material-ui/core/Checkbox";

import List from "./list";
import Alert from "../../../components/alert";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.state = {
      ShowOtherPlaces: false,
      showMyLocation: false,
      showhistorical: false,
      IsOutbound: false
    };
  }
  handleCloseAlert = () => {
    this.setState({ IsOutbound: false });
  };
  handleshowhistorical = () => {
    if (this.state.showhistorical) {
      this.props.ShowOrHide_H_A(false);
      this.setState({ showhistorical: false });
    } else {
      this.props.ShowOrHide_H_A(true);
      this.setState({ showhistorical: true });
    }
  };
  handleShowOtherPlaces = () => {
    //this.props.handleMyLocation(null, null, data.key);
    if (this.state.ShowOtherPlaces) {
      this.setState({ ShowOtherPlaces: false });
      console.log(this.state.ShowOtherPlaces);
      this.props.hideBusinesses();
    } else {
      this.setState({ ShowOtherPlaces: true });
      console.log(this.state.ShowOtherPlaces);
      this.props.showBusinesses();
    }
  };
  handleMyLocation = (e, data) => {
    const openAlert = () => {
      this.setState({ IsOutbound: true }); //alert("You are not inbound");
      this.setState({ showMyLocation: false });
      this.props.zoomOut();
    };

    this.props.showMyLocation(function(isInbound) {
      if (!isInbound) {
        openAlert();
      }
    });
    this.setState({ showMyLocation: true });
  };

  render() {
    return (
      <div>
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
                  style={{ color: "white", marginLeft: "0" }}
                  control={
                    <Checkbox
                      checked={this.state.showMyLocation}
                      onChange={this.handleMyLocation}
                      value={"My location"}
                      color="primary"
                    />
                  }
                  label="Show my location"
                />
              </Row>
            </Paper>
          </Row>
        </Col>
        <Alert
          open={this.state.IsOutbound}
          CloseIt={this.handleCloseAlert}
          title={"User not on the trail"}
          message={"You are not in Franco Trail Area"}
          explanations={
            "You need to be on the trail (or closeby) to view your location"
          }
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { mapConfig } = state; // the state object comes from Redux store
  const { mapConfig_Desktop } = state; // the state object comes from Redux store

  return {
    zoomOut: mapConfig.zoomOut,
    clickOnMarker: mapConfig.clickOnMarker,
    showBusinesses: mapConfig.showBusinesses,
    hideBusinesses: mapConfig.hideBusinesses,
    ShowOrHide_H_A: mapConfig.ShowOrHide_H_A,
    showMyLocation: mapConfig.showMyLocation,
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
    paddingLeft: "20px",
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
    height: "55vh"
  }
};
