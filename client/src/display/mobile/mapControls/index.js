import React, { Component } from "react";
import { Row } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "react-simple-flex-grid/lib/main.css";
import { connect } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Alert from "../../../components/alert";
import {
  showMyPosition,
  hideMyPosition
} from "../../../components/map/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.state = {
      ShowOtherPlaces: false,
      showMyLocation: false,
      showhistorical: false,
      IsOutbound: false,
      alertMessage: ""
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
    const isNotBound = message => {
      this.setState({ alertMessage: message });
      this.setState({ IsOutbound: true }); //alert("You are not inbound");
      this.setState({ showMyLocation: false }); //Checkbox
      this.props.zoomOut();
    };
    const isInBound = marker => {
      if (this.state.showMyLocation) {
        // this.props.removeMarker(marker);
        this.props.dispatch(hideMyPosition(marker, this.props.mapObject));
        this.props.zoomOut();
        this.setState({ showMyLocation: false });
      } else {
        this.props.dispatch(showMyPosition(marker, this.props.mapObject));
        this.setState({ showMyLocation: true });
      }
    };
    this.props.showMyLocation(function(isInbound, message, marker) {
      if (!isInbound) {
        isNotBound(message);
      } else {
        isInBound(marker);
      }
    });
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
            title={"Franco Trail L-A"}
            message={this.state.alertMessage}
            explanations={" "}
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
    mapObject: mapConfig.mapObject,
    viewConfig: mapConfig_Desktop
  };
};

export default connect(mapStateToProps)(App);

const styles = {
  control_buttons: {
    margin: "10px",
    backgroundColor: "#D7E4F4",
    paddingLeft: "20px",
    maxHeight: "25vh"
  }
};
