import React, { Fragment, useState, useEffect } from "react";
import Home from "./Home"

import { BrowserRouter, Switch, Route } from "react-router-dom"



function App () {
	

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}/>

				<Route />
			</Switch>
		</BrowserRouter>
	)

}

export default App