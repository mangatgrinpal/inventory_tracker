import React, { Fragment, useState, useEffect } from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const Home = () => {

	return (
		<Fragment>
			<Container>
				<Row className='text-center'>
					<Col>
						<h1>Inventory Management System</h1>
					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

export default Home