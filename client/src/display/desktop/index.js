import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainApp from "./app";
import ClearMap from "./_clearmap";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={MainApp} />
      <Route path="/clearmap/" component={ClearMap} />
    </Router>
  );
}

export default AppRouter;
