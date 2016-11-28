import React, {Component} from 'react';
import Header from "./_blocks/Header";

import LiTable from "./_blocks/oneColumnTable";

class Home extends Component {

	render() {
		return (
			<div>
				<Header />
				<div className="row">
					<div className="col-4">
						<LiTable />
					</div>
					<div className="col-4">
						<LiTable />
					</div>
					<div className="col-4">
						<LiTable />
					</div>

				</div>
				{ this.props.children }
			</div>
		);
	}
}

export default Home;
