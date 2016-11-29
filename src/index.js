import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router} from 'react-router';
import routes from "./routes";
import "./assets/styles/reset.css";
import "./assets/styles/bootstrap.css";
import "./assets/styles/main.css";

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById("root"));
