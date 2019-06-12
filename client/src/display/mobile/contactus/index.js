import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="CContainer">
      <p className="CTopTitle">Get in touch</p>
      <p className="CTitle">Hours</p>
      <p className="CContent">Tuesday - Friday 10:00 am - 4:00 pm</p>
      <p> Saturday: 10:00 am - 3:00 pm</p>
      <p className="CTitle">Mailing Address</p>
      <p>35 Canal Street, Box A7 Lewiston, ME 04240</p>
      <p className="CTitle">Contact us</p>
      <p className="CContent">
        Tel: <a href="tel:2073333881">207-333-3881</a>
      </p>
      <p>
        Email: <a href="mailto:info@museumla.org">info@museumla.org</a>
      </p>
    </div>
  );
}

export default App;
