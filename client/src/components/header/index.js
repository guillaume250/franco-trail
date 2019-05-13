import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TitleImage from "../../resources/header_images/title.png";
import theme from "../../config/themes_config";
import styles from "./styles";
import "./stylecss.css";

function SimpleAppBar(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary">
        <Toolbar style={styles.center}>
          <img src={TitleImage} className="responsive" alt="Logo" />
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

export default SimpleAppBar;
