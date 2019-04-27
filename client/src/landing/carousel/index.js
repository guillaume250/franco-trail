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

class Carousel extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="scrolling-wrapper-flexbox">
        <div className="card">
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={basilica}
              title="basilica"
            />
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
          </Card>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Carousel);
