import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MapView from "./mapView";
import PartnersView from "./partners";
import ContactsView from "./contactus";
import Header from "../../components/header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={MapView} />
      <Route path="/Partners/" component={PartnersView} />
      <Route path="/Contactus/" component={ContactsView} />
    </Router>
  );
}

export default AppRouter;
