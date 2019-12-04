import React, { Fragment, useState, useEffect } from 'react';


import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation'
import Home from './Home'
import Dashboard from './Dashboard'

import store from '../store'


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const App = ({ currentDay, yesterday }) => {

	return (
		<Provider store={store}>
			<Router>
				<Navigation />

				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/dashboard'>
						<Dashboard
							yesterday={yesterday}
							currentDay={currentDay} />
					</Route>

				</Switch>
			</Router>
		</Provider>
	)

}

export default App