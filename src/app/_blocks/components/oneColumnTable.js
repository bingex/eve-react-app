import React, {Component} from 'react';

export default class oneColumnTable extends Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>{this.props.title}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className={this.props._class}>{this.props.list}</td>
        </tr>
        </tbody>
      </table>
    );
  }
}