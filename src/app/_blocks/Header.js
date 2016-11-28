import React, {Component} from "react";
import {Link} from 'react-router';

export default class Header extends Component {

	render() {
		return (
			<header>
				<div className="grayback header">
					<h1>
						<Link to="/item">EVE-Prod.</Link>
					</h1>
				</div>
			</header>
		);
	}
}