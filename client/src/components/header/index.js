import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TitleImage from "../../resources/header_images/f1.png";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Link } from "react-router-dom";

import "./stylecss.css";

class SimpleAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileOpen: false, DrawerOpen: false };
  }
  toggleDrawer = open => () => {
    this.setState({
      DrawerOpen: open
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar className="AppBarista " color="primary">
          <Toolbar className={classes.root}>
            <IconButton
              className={classes.menuBUtton}
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <div className="LogoTitleIMGMobo">
              <img src={TitleImage} className="Logoresponsive" alt="Logo" />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.DrawerOpen} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          />
          <List component="nav" className={classes.root}>
            <img src={TitleImage} className="LogoDrawer" alt="Logo" />
            <nav>
              <Link
                to="/"
                className="NavLinks"
                onClick={this.toggleDrawer(false)}
              >
                <ListItem button>Map</ListItem>
              </Link>
              <Link
                to="/Partners"
                className="NavLinks"
                onClick={this.toggleDrawer(false)}
              >
                <ListItem button>Partners</ListItem>
              </Link>
              <Link
                to="/Contactus"
                className="NavLinks"
                onClick={this.toggleDrawer(false)}
              >
                <ListItem button>Contact us</ListItem>
              </Link>
            </nav>
          </List>
          <div style={{ padding: "10px", width: "50vw" }} />
        </Drawer>
      </div>
    );
  }
}
const stylesX = {
  root: {
    backgroundColor: "white",
    height: 48,
    padding: "0 0",
    alignItems: "flex-start",
    alignContents: "flex-start"
  },
  menuBUtton: {
    color: "black"
  }
};
export default withStyles(stylesX)(SimpleAppBar);
