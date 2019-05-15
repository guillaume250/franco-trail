import React from "react";
import { Row, Col } from "react-simple-flex-grid";
import logo from "../../../resources/header_images/title.png";

function SimpleAppBar(props) {
  return (
    <Col span={12}>
      <div style={{ paddingLeft: "10px" }}>
        <InputLabel style={styles.contactus}>
          <p>{"Contact info"} </p>
          <p>
            {"email: "}
            <a style={styles.contactus} href="mailto:info@museumla.org">
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
      </div>{" "}
    </Col>
  );
}

export default SimpleAppBar;

const styles = {
  contactus: {
    color: "white"
  }
};
