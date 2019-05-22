import React from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "./style.css";
const Partners_Logo = [
  require("../../../resources/partners/museumLA.jpg"),
  require("../../../resources/partners/GFC.jpg"),

  require("../../../resources/partners/Chamber.png"),
  require("../../../resources/partners/FAC.jpg"),
  require("../../../resources/partners/cfa.png"),
  require("../../../resources/partners/dqb.png"),
  require("../../../resources/partners/lojiq1.jpg")

  //  require("../../../resources/partners/basilica.jpg") >>> Prince of Peace Logo
];

class SimpleAppBar extends React.Component {
  render() {
    return (
      <Col span={12} style={{ padding: "20px" }}>
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
