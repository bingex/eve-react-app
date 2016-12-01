import React, {Component} from "react";
import {Link} from "react-router";

export default class Header extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <header>
              <div id="head">
                <Link to="/">EVE-Prod.</Link>
              </div>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <nav id="header-menu">
              <ul>
                <li>
                  Calculators
                  <ul>
                    <li>BPC calculator</li>
                    <li>Cargo, fitting</li>
                  </ul>
                </li>
                <li>Market</li>
                <li>Item</li>
                <li className="red-cell">
                  <Link to="/donate">Donate</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}