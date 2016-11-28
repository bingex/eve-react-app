import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router} from 'react-router';
import routes from "./routes";
import "./static/styles/simple-grid.css";
import "./static/styles/main.css";

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById("root"));
