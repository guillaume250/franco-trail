import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Slider from "react-slick";
import HorizontalScroll from "react-scroll-horizontal";

import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";

import basilica from "./basilica.JPG";
import styles from "./styles";
import stylesCSS from "./styles.css";
import places from "../map/markers/places";

class Carousel extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
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
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="scrollLeft" className="scrolling-wrapper-flexbox">
        {places.map(place => (
          <div className="card">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={basilica}
                title={place.name}
              />
              <CardHeader
                avatar={
                  <Avatar aria-label={place.name} className={classes.avatar}>
                    <img src={place.icon} />
                  </Avatar>
                }
                title={place.name}
                subheader={place.shortDesc}
              />
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Carousel);
