import React, {Component} from 'react';
import {Link} from 'react-router';

import Header from "./_blocks/Header";

class Donate extends Component {

  render() {
    return (
      <div>
        <Header />

        <div className="row">
          <div className="col-md-12">
            <table>
              <thead>
              <tr>
                <th>Authors</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>I am on Donate, <Link to="/">go to Home</Link></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>


      </div>
    );
  }
}
export default Donate;