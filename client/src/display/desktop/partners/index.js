import React from "react";
import { Row, Col } from "react-simple-flex-grid";

const Partners_Logo = [
  require("../../../resources/partners/museumLA.jpg"),
  require("../../../resources/partners/GFC.jpg"),

  require("../../../resources/partners/basilica.jpg"),
  require("../../../resources/partners/Chamber.png"),
  require("../../../resources/partners/FAC.jpg")
];

class SimpleAppBar extends React.Component {
  componentDidMount() {
    (function() {
      ///Carousel Scroll horizontal on mousewheel move
      var carousel = document.getElementById("scrollLeftX");
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
    return (
      <Col span={12} style={styles.container}>
        <p style={{ alignText: "center", color: "white" }}>{"Our Partners"}</p>

        <Row>
          <div id="scrollLeftX" className="scrolling-wrapper-flexbox">
            {Partners_Logo.map(partner => (
              <Col key={partner}>
                <img
                  alt="The Franco Trail L-A"
                  style={styles.logo}
                  src={partner}
                />
              </Col>
            ))}
          </div>
        </Row>
      </Col>
    );
  }
}

export default SimpleAppBar;

const styles = {
  container: {
    margin: "20px"
  },
  logo: {
    maxHeight: "150px",
    marginRight: "30px",
    maxWidth: "200px",
    boxShadow: " 0px 0px 15px 0px #000000"
  }
};
