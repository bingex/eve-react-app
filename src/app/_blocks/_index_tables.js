import React, {Component} from 'react';

export default class index_tables extends Component {

	render() {
		return (
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
		);
	}
}