import React, {Component} from 'react';
import {Link} from 'react-router';


class Item extends Component {

	render() {
		return (

			<div>ITEM<br />
				<Link to="/">to Home</Link>
			</div>


		);
	}
}

export default Item;
