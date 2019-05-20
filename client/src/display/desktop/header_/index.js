import React from "react";
import { Col } from "react-simple-flex-grid";
import SmoothScroll from "smooth-scroll";
import "animate.css";
import logo from "../../../resources/header_images/f1.png";
import arrowDown from "./arrow-down.png";
import "./style.css";
class App extends React.Component {
  componentDidMount() {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 300,
      easing: "easeInOutCubic"
    });

    setTimeout(function() {
      let element = document.getElementById("ArrowDown");
      element.className = "animated bounce";
    }, 5000);
  }
  render() {
    return (
      <div className="parentX animated fadeIn">
        <div className="child1">
          {/*}<h1 id="headline" className="animated fadeIn delay-1s">
            The Franco Trail L-A
          </h1>*/}
          <img
            className="image animated fadeIn delay-1s"
            alt="The Franco Trail L-A"
            src={logo}
          />
          <div id="subtitle" className="animated fadeIn delay-2s">
            Celebrating French Heritage
          </div>
        </div>
        <div className="child2">
          <a href="#mapSection">
            <img
              id="ArrowDown"
              className="arrowDown animated fadeIn delay-3s"
              alt="Arrow Down Icon"
              src={arrowDown}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
