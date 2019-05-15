import React from "react";
import { Row, Col } from "react-simple-flex-grid";
import logo from "../../../resources/header_images/title.png";

function SimpleAppBar(props) {
  return (
    <Col span={12}>
      <img alt="The Franco Trail L-A" style={styles.logo} src={logo} />
    </Col>
  );
}

export default SimpleAppBar;

const styles = {
  logo: {
    height: "150px",
    display: "block",
    marginLeft: "20px"
  }
};
