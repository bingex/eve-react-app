import React, {Component} from "react";

export default class UsersList extends Component {
  render() {
    return (
      <div className="inline user_img">
        <img alt={this.props.char.char_name}
             src={"https://image.eveonline.com/Character/" + this.props.char.char_id + "_64.jpg"}/>
      </div>
    );
  }
}