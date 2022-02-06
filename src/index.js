import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router, Route } from "react-router";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route>path="/" componet ={App}</Route>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
