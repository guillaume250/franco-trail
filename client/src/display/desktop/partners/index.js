import React from "react";
import { Row, Col } from "react-simple-flex-grid";
import "./style.css";
const Partners_Logo = [
  require("../../../resources/partners/museumLA.jpg"),
  require("../../../resources/partners/GFC.jpg"),

  require("../../../resources/partners/basilica.jpg"),
  require("../../../resources/partners/Chamber.png"),
  require("../../../resources/partners/FAC.jpg")
];

class SimpleAppBar extends React.Component {
  // componentDidMount() {
  //   (function() {
  //     ///Carousel Scroll horizontal on mousewheel move
  //     var carousel = document.getElementById("scrollLeftX");
  //     function scrollHorizontally(e) {
  //       e = window.event || e;
  //       var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  //       carousel.scrollLeft -= delta * 40; // Multiplied by 40
  //       carousel.scrollLeft -= delta * 40; // Multiplied by 40
  //       e.preventDefault();
  //     }
  //     if (carousel.addEventListener) {
  //       // IE9, Chrome, Safari, Opera
  //       carousel.addEventListener("mousewheel", scrollHorizontally, false);
  //       // Firefox
  //       carousel.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  //     } else {
  //       // IE 6/7/8
  //       carousel.attachEvent("onmousewheel", scrollHorizontally);
  //     }
  //   })();
  // }

  render() {
    return (
      <Col span={10} style={{ margin: "20px" }}>
        <Row className="PartnersTitleContainer">
          <p className="PartnersTitle">Our Partners</p>
        </Row>

        <Row>
          <div id="scrollLeftX" className="scrolling-wrapper-flexbox1">
            {Partners_Logo.map(partner => (
              <Col key={partner}>
                <div className="LogoContainer">
                  <img
                    alt="The Franco Trail L-A"
                    className="logo"
                    src={partner}
                  />
                </div>
              </Col>
            ))}
          </div>
        </Row>
      </Col>
    );
  }
}

export default SimpleAppBar;
