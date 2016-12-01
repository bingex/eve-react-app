import React from "react";
import ReactDOM from "react-dom";
import {Router,browserHistory} from "react-router";
import routes from "./app/routes";
import "./assets/styles/reset.css";
import "./assets/styles/bootstrap.css";
import "./assets/styles/main.css";

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById("root"));
