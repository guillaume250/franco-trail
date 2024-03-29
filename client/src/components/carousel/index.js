import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import { connect } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Popup from "../popup";
import styles from "./styles";
import "./styles.css";
import places from "../../resources/places";
let countedID = 0;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);

    this.state = { open: false, selectedPlace: {} };
  }

  handleClick = (e, data) => {
    if (countedID === data.key) {
      countedID = 0;
      this.setState({ selectedPlace: data });
      this.setState({ open: true });
    } else {
      countedID = data.key;
      this.props.clickOnMarker(null, null, data.key);
      console.log(data);
    }
  };
  handleClose = () => {
    this.props.zoomOut();
    this.setState({ open: false });
  };
  componentDidMount() {
    (function() {
      ///Carousel Scroll horizontal on mousewheel move
      var carousel = document.getElementById("scrollLeft");
      function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
        carousel.scrollLeft -= delta * 40; // Multiplied by 40
        carousel.scrollLeft -= delta * 40; // Multiplied by 40
        e.preventDefault();
      }
      if (carousel.addEventListener) {
        // IE9, Chrome, Safari, Opera
        carousel.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        carousel.addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
        // IE 6/7/8
        carousel.attachEvent("onmousewheel", scrollHorizontally);
      }
    })();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="CarouselTopContainer">
        <div id="scrollLeft" className="scrolling-wrapper-flexbox">
          {places.map(place => (
            <div id="CArdxx" refs="CArdxx" key={place.key} className="card">
              <Card
                className={classes.card}
                onClick={e => this.handleClick(e, place)}
              >
                <CardMedia
                  className={classes.media}
                  image={place.thumbnail}
                  title={place.name}
                />
                <CardHeader
                  className="AvatarAndDescription"
                  avatar={<Avatar aria-label={place.name} src={place.icon} />}
                  title={place.name}
                  subheader={place.shortDesc}
                />
              </Card>
            </div>
          ))}
          <Popup
            open={this.state.open}
            CloseIt={this.handleClose}
            data={this.state.selectedPlace}
          />
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  const { mapConfig } = state; // the state object comes from Redux store
  return {
    clickOnMarker: mapConfig.clickOnMarker,
    zoomOut: mapConfig.zoomOut
  };
};

const Carous = withStyles(styles)(Carousel);
export default connect(mapStateToProps)(Carous);
