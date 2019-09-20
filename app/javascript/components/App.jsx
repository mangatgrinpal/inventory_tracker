import React from "react"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route />
					<Route />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App