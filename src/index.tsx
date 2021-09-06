import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import Router from "./components/router/router";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
