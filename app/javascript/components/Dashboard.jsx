import React, { Fragment, useEffect, useState } from 'react';
import Restaurant from './Restaurant'
import Loading from './Loading'
import { Switch, Route, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Dashboard = ({ match }) => {


	useEffect(()=> {
		console.log('hello')

		return () => {
			console.log('unmount')
		}
	})

	return (
		<Fragment>
			<Container fluid={true}>
				<Row>
					<Col>
						<h1>Your restaurants are listed below.</h1>

						<Restaurant />

					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

export default Dashboard