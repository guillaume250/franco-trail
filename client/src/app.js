import React, { Component } from "react";
import MediaQuery from "react-responsive";
import "./app.css";
import Desktop from "./display/desktop";
//import Tablet from "./display/tablet";
import Mobile from "./display/mobile";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <MediaQuery query="(min-width: 1291px)">
          <Desktop />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px) and (max-width: 1290px)">
          <Mobile />
        </MediaQuery>
        <MediaQuery query="(max-width: 767px) and (orientation: landscape)">
          <Mobile />
        </MediaQuery>
        <MediaQuery query="(max-width: 767px) and (orientation: portrait)">
          <Mobile />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
