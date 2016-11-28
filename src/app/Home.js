import React, {Component} from 'react';
// import Header from "./_blocks/Header";

// import LiTable from "./_blocks/oneColumnTable";

class Home extends Component {

	render() {
		return (
			<div>
				<header className="m-b-3">
					<div id="head">
						<a href="/">EVE-Prod.</a>
					</div>
				</header>
				<nav className="blueback m-b-3" id="header-menu">
					<ul>
						<li>Calculators</li>
						<li>Market</li>
						<li>Item</li>
					</ul>
				</nav>

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

				<div className="row">
					<div className="col-md-12">
						<div className="panel-content">Market Monitoring</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						dsdsd
					</div>
				</div>

			</div>
		);
	}
}

export default Home;
