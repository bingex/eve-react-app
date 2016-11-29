import React, {Component} from 'react';
import Copyright from "./_blocks/_copyright";
import Header from "./_blocks/Header";
import PanelContent from "./_blocks/_panel_content";

export default class Home extends Component {

  render() {
    return (
      <div>
        <Header />

        <div className="row">
          <div className="col-md-4 col-first">
            <table>
              <thead>
              <tr>
                <th className="t-a_l">Market</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Prices</li>
                    <li>Online orders</li>
                  </ul>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4 col-midd">
            <table>
              <thead>
              <tr>
                <th className="t-a_l">Market</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Prices</li>
                    <li>Online orders</li>
                  </ul>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-4 col-last">
            <table>
              <thead>
              <tr>
                <th className="t-a_l">Market</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Prices</li>
                    <li>Online orders</li>
                    <li>Online check availabilyty</li>
                  </ul>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <PanelContent />

        <div className="row">
          <div className="col-md-12">
            <table>
              <thead>
              <tr>
                <th className="t-a_l">Market</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="padd-3"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Copyright />
      </div>
    );
  }
}