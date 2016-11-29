import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './app/App';
import Home from './app/Home';
import Donate from './app/Donate';

export default (

	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/donate" component={Donate}/>
	</Route>
);