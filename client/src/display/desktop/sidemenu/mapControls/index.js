import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid"; import "react-simple-flex-grid/lib/main.css";
import "react-simple-flex-grid/lib/main.css";
import { connect } from "react-redux";
import { showAttraction_, hideAttraction_ } from "../actions";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import Checkbox from "@material-ui/core/Checkbox";

import List from "../list";
import Alert from "../../../../components/alert";

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
    const showAttractions = (show, map, maps) => {
      if (show) {
        this.props.ShowOrHide_H_A(true);
        //this.props.dispatch(showAttraction_(map, maps));
      } else {
        //this.props.dispatch(hideAttraction_(map, maps));
        this.props.ShowOrHide_H_A(false);
      }
    };

    if (this.state.showhistorical) {
      this.props.getMapObjects(function(map, maps) {
        showAttractions(false, map, maps);
      });
      this.setState({ showhistorical: false });
    } else {
      this.props.getMapObjects(function(map, maps) {
        showAttractions(true, map, maps);
      });
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
        <Paper elevation={4} style={styles.control_buttons}>
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

          <Alert
            open={this.state.IsOutbound}
            CloseIt={this.handleCloseAlert}
            title={"User not on the trail"}
            message={"You are not in Franco Trail Area"}
            explanations={
              "You need to be on the trail (or closeby) to view your location"
            }
          />
        </Paper>
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
    getMapObjects: mapConfig.getMapObjects,
    viewConfig: mapConfig_Desktop
  };
};

export default connect(mapStateToProps)(App);

const styles = {
  control_buttons: {
    marginTop: "10px",
    margin: "5px",
    flex: "1",
    backgroundColor: "#D7E4F4",
    paddingLeft: "20px",
    maxHeight: "25vh",
    position: "absolute",
    bottom: 0
  }
};
