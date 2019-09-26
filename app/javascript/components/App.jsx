import React, { Fragment, useState, useEffect } from "react";

import { Provider } from "react-redux"

import Home from "./Home"
import Dashboard from "./Dashboard"

import configureStore from "../configureStore"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const store = configureStore();


const App = () => {
	

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/dashboard" component={Dashboard}/>
				</Switch>
			</Router>
		</Provider>
	)

}

export default App