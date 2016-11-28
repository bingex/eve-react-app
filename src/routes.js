import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Home from './app/Home';
import ItemPage from './app/ItemPage';
import Item from './app/Item';

export default (
	<Route path="/" component={Home}>
		<IndexRoute component={ItemPage}/>

		<Route path="/item" component={Item}/>
	</Route>
);