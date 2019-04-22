import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../../config/themes";
import styles from "./styles";
function SimpleAppBar(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary">
        <Toolbar style={styles.center}>
          <Typography variant="h4" color="secondary">
            The Franco Trail
          </Typography>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

export default SimpleAppBar;
