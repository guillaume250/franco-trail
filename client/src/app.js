import React, { Component } from "react";
import MediaQuery from "react-responsive";
import "./app.css";
import Desktop from "./display/desktop";
import Tablet from "./display/tablet";
import Mobile from "./display/mobile";

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-width: 1025px)">
          <Desktop />
          {/*Desktop*/}
        </MediaQuery>
        <MediaQuery query="(min-width: 768px) and (max-width: 1290px)">
          <Tablet /> {/*Tablet*/}
        </MediaQuery>
        <MediaQuery query="(max-width: 767px) and (orientation: landscape)">
          <Mobile /> {/*Mobile landscape*/}
        </MediaQuery>
        <MediaQuery query="(max-width: 767px) and (orientation: portrait)">
          <Mobile /> {/*Mobile portrait*/}
        </MediaQuery>
      </div>
    );
  }
}

export default App;
