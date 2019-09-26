import React, { Fragment, useEffect, useState } from "react";
import Restaurant from "./Restaurant"
import axios from "axios";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const Dashboard = () => {


	useEffect(()=> {
		axios.get('/')
	})

	return (
		<Fragment>
			<Container fluid={true}>
				<Row>
					<Col>
						<h1>Your restaurants are listed below.</h1>
						
						<ul>

						</ul>


						<Restaurant />
					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

export default Dashboard