import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "react-simple-flex-grid/lib/main.css";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import MapControlButtons from "./mapControls";
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
      <div style={styles.SideMenu}>
        <Col span={12}>
          <Row>
            <Paper elevation={4} style={styles.attractions_container}>
              <InputLabel style={styles.main_attractions_title}>
                {"Main Attractions"}
              </InputLabel>
              <GridList style={styles.main_attractions}>
                <List />
              </GridList>
            </Paper>
          </Row>
          <MapControlButtons />
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
    getMapObjects: mapConfig.getMapObjects,
    viewConfig: mapConfig_Desktop
  };
};

export default connect(mapStateToProps)(App);

const styles = {
  SideMenu: {
    display: "flex",
    marginRight: "30px",
    height: "75vh",
    overflow: "hidden"
  },
  attractions_container: {
    margin: "5px",
    padding: "10px",
    backgroundColor: "#5B95F3",
    flex: "1"
  },
  main_attractions_title: {
    marginBottom: "10px",
    padding: "35px",
    color: "white",
    fontSize: "1.8vw",
    fontWeight: 400,
    fontFamily: "'Pacifico', cursive",
    textDecoration: "underline"
  },
  main_attractions: {
    opacity: 1,
    color: "white",
    flex: "1",
    backgroundColor: "#5B95F3",
    padding: "10px",
    height: "45vh",
    overflowY: "scroll"
  },
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
