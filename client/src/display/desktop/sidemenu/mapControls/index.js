import React, { Component } from "react";
import { Row } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "react-simple-flex-grid/lib/main.css";
import { connect } from "react-redux";
import { showAttraction_, hideAttraction_ } from "../actions";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Alert from "../../../../components/alert";
import {
  setMapObject,
  showMyPosition,
  hideMyPosition
} from "../../../../components/map/actions";
import AlertB from "../../alert_showRest";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.handleCloseAlertB = this.handleCloseAlertB.bind(this);

    this.state = {
      ShowOtherPlaces: false,
      showMyLocation: false,
      showhistorical: false,
      IsOutbound: false,
      alertB: false,
      alertMessage: ""
    };
  }
  handleCloseAlert = () => {
    this.setState({ IsOutbound: false });
  };
  handleCloseAlertB = () => {
    this.setState({ alertB: false });
    this.setState({ ShowOtherPlaces: false });
  };
  handleshowhistorical = () => {
    const showAttractions = (show, map, maps) => {
      if (show) {
        this.props.ShowOrHide_H_A(true);
        this.props.dispatch(showAttraction_(map, maps));
      } else {
        this.props.dispatch(setMapObject(this.props.mapObject));
        this.props.dispatch(hideAttraction_(map, maps));
        this.props.ShowOrHide_H_A(false);
        this.props.refreshIt();
        window.location.reload();
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
      //  this.setState({ alertB: false });

      this.setState({ ShowOtherPlaces: false });
      console.log(this.state.ShowOtherPlaces);
      this.props.hideBusinesses();
    } else {
      //  this.setState({ alertB: true });

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
        this.props.dispatch(
          hideMyPosition(marker, this.props.mapObject, this.props.mapsObject)
        );
        this.props.zoomOut();
        this.setState({ showMyLocation: false });
        window.location.reload();
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
          <AlertB
            open={this.state.alertB}
            CloseIt={this.handleCloseAlertB}
            title={"Franco Trail L-A"}
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
    removeMarker: mapConfig.removeMarker,
    getMapObjects: mapConfig.getMapObjects,
    mapObject: mapConfig.mapObject,
    mapsObject: mapConfig.mapsObject,
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
