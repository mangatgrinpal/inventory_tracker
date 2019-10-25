import React, { Fragment, useEffect, useState } from 'react';
import Restaurant from './Restaurant'
import Loading from './Loading'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchRestaurants } from '../actions/restaurants'



import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



const Dashboard = ({ match, fetchRestaurants, restaurants: { isFetching } }) => {


	useEffect(()=> {
		fetchRestaurants()


	},[])

	return (
		<Fragment>
			<Container fluid={true}>
				<Row>
					<Col>
						
						{isFetching ? <Loading /> :
						<Restaurant />}

					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

const mapStateToProps = state => {
	return {
		restaurants: state.restaurants,
		isFetching: state.isFetching
	}
	
}




export default connect (
	mapStateToProps,
	{ fetchRestaurants }
)(Dashboard)