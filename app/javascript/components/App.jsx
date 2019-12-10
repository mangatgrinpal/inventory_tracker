import React, { Fragment, useState, useEffect } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import Navigation from './Navigation';
import Home from './Home';
import Loading from './Loading';
import Dashboard from './Dashboard';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';

import { store, persistor } from '../store'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const App = ({ currentDay, yesterday }) => {

	return (
		<Provider store={store}>
			<PersistGate loading={<Loading/>} persistor={persistor}>

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
						<Route path='/sign-up'>
							<UserSignUp />
						</Route>
						<Route path='/sign-in'>
							<UserSignIn />
						</Route>

					</Switch>
				</Router>
			</PersistGate>
		</Provider>
	)

}

export default App