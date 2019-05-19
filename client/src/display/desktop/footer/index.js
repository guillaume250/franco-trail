import React from "react";
import { Row, Col } from "react-simple-flex-grid";
import logo from "../../../resources/header_images/title.png";
import "./styles.css";
function SimpleAppBar(props) {
  return (
    <Col span={12} className="footerContainer">
      <div className="footerContactTitle">Contact us</div>
      <div className="footerContactDetails">
        <p>
          {"Address: "}
          <a href="#Address">{"35 Canal Street, Box A7 Lewiston, ME 04240"} </a>
        </p>
        <div className="FooterSeparator" />
        <p>
          {"Phone: "}
          <a href="tel:2073333881">{"207-333-3881"}</a>
        </p>
        <div className="FooterSeparator" />
        <p>
          {"Email: "}
          <a href="mailto:info@museumla.org">{"info@museumla.org"}</a>
        </p>
      </div>
    </Col>
  );
}

export default SimpleAppBar;
