import React from "react";
import { Col } from "react-simple-flex-grid";
import logo from "../../../resources/header_images/f2.png";
import "./style.css";
function SimpleAppBar(props) {
  return (
    <Col span={12} className="parent">
      <center>
        <img className="image" alt="The Franco Trail L-A" src={logo} />
      </center>
    </Col>
  );
}

export default SimpleAppBar;
