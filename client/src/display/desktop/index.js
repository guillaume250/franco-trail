import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import Map from "../../components/map";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import List from "./list";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from "@material-ui/core/Radio";
import Caroussel from "../../components/carousel";
import { connect } from "react-redux";
import { showBusinesses, hideBusinesses } from "./actions";
import { withStyles } from "@material-ui/core/styles";

import logo from "../../resources/header_images/title.png";
class App extends Component {
  constructor(props) {
    super(props);
    //  this.handleClose = this.handleClose.bind(this);

    this.state = {
      showRestaurants: false,
      showMyLocation: false,
      myLocation: {}
    };
  }
  handleMyLocation = (e, data) => {
    //this.props.handleMyLocation(null, null, data.key);
    if (this.state.showMyLocation) {
      this.setState({ showMyLocation: false });
      this.props.dispatch(hideBusinesses());
    } else {
      this.props.dispatch(showBusinesses());
      this.setState({ showMyLocation: true });
    }
  };
  handleshowRestaurants = () => {
    //this.props.handleMyLocation(null, null, data.key);
    if (this.state.showRestaurants) {
      this.setState({ showRestaurants: false });
    } else {
      this.setState({ showRestaurants: true });
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Col>
          <Row>
            <Col span={3}>
              {/*_____ side menu________*/}
              <Row>
                <div style={{ paddingLeft: "10px" }}>
                  <InputLabel style={styles.contactus}>
                    <p>{"Contact info"} </p>
                    <p>
                      {"email: "}
                      <a
                        style={styles.contactus}
                        href="mailto:info@museumla.org"
                      >
                        {"info@museumla.org"}
                      </a>
                    </p>
                    <p>
                      {"Phone: "}
                      <a style={styles.contactus} href="tel:2073333881">
                        {"207-333-3881"}
                      </a>
                    </p>
                  </InputLabel>
                </div>
              </Row>
            </Col>
            <Col span={9}>
              {/*_____ Logo Image ________*/}
              <img alt="The Franco Trail L-A" style={styles.logo} src={logo} />
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              {/*_____ side menu________*/}
              <Row>
                <Paper style={styles.Title1}>
                  <InputLabel style={styles.Title1_Title}>
                    {"Main Attractions"}
                  </InputLabel>
                </Paper>
              </Row>
              <Row>
                <Paper style={styles.sidemenu}>
                  <GridList>
                    <List />
                  </GridList>
                </Paper>
              </Row>
            </Col>
            {/*_____ side menu________*/}
            <Col span={6}>
              {/*_____ map________*/}
              <div style={styles.mapContainer}>
                <Map viewConfig={this.props.viewConfig} />
              </div>
            </Col>
            <Col span={3}>
              <Paper style={styles.interactionButtons}>
                <Row>
                  <div>
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
                  </div>
                </Row>
                <Row>
                  <div>
                    <FormControlLabel
                      classes={{ label: classes.checkboxLabelB }}
                      control={
                        <Switch
                          classes={{ color: "green" }}
                          checked={this.state.showRestaurants}
                          onChange={this.handleshowRestaurants}
                          value={this.state.showRestaurants}
                          color="primary"
                        />
                      }
                      label="Show Restaurants, parkings, hotels and other businesses"
                    />
                  </div>
                </Row>

                <Row>
                  <div>
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
                  </div>
                </Row>
              </Paper>
            </Col>
          </Row>
          <Caroussel />
        </Col>
      </div>
    );
  }
}
const labelo = <p>"Show Restaurants, parkings, hotels and other businesses"</p>;
const mapStateToProps = state => {
  const { mapConfig } = state; // the state object comes from Redux store
  const { mapConfig_Desktop } = state; // the state object comes from Redux store

  return {
    clickOnMarker: mapConfig.clickOnMarker,
    viewConfig: mapConfig_Desktop
  };
};

const Appli = withStyles(stylesX)(App);
export default connect(mapStateToProps)(Appli);
const stylesX = theme => ({
  checkboxLabelA: {
    fontWeight: 800
  },
  checkboxLabelB: {
    color: "white"
  }
});
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
    backgroundColor: "#E1D31F",
    padding: "10px",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "20px",
    height: "50vh"
  },
  logo: {
    height: "150px",
    display: "block",
    marginLeft: "20px"
  },
  mapContainer: { padding: "10px", marginRight: "20px" },
  menu1: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginLeft: "10px"
  },
  menu2: {
    display: "block",
    paddingLeft: "10px",
    paddingRight: "10px",
    alignSelf: "flex-end",
    marginLeft: "10px"
  }
};
