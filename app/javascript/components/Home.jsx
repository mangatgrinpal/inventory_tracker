import React, { Fragment, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const Home = () => {
	const [name, setName] = useState("dude")


	return (
		<Fragment>
			<Container>
				<h1>Hello {name}!</h1>
				<Button variant="primary" onClick={()=> setName("bro")}>
					make me a bro
				</Button>

				<Link to="/dashboard">Dashboard</Link>				
			</Container>
		</Fragment>
	)
}

export default Home