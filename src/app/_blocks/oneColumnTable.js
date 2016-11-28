import React, {Component} from 'react';

export default class oneColumnTable extends Component {

	render() {
		return (
			<table>
				<thead>
				<th>
					Market
				</th>
				</thead>
				<tbody>
				<tr>
					<td>
						<ul className="marked_list">
							<li>Actual Prices (Eve-Central)</li>
							<li>Prices Review Of One Item In Different Market Hubs</li>
							<li>Buying And Selling Price Margin‎ In Different Systems</li>
							<li>Search Of Fast And Slow Auctions</li>
							<li>Dynamic Pricing Review</li>
							<li>Orders Review In Real Time</li>
						</ul>
					</td>
				</tr>
				</tbody>
			</table>
		);
	}
}