import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "App.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById("root")
);
