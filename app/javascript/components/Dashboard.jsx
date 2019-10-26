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



const Dashboard = ({ 
	match, 
	fetchRestaurants, 
	restaurants: { isFetching, restaurantList } 
}) => {


	useEffect(()=> {
		fetchRestaurants()


	},[ fetchRestaurants ])

	const listOfRestaurants = restaurantList.map(restaurant=> {

		let restaurantName = restaurant["attributes"].name
		return (

			<Restaurant key={restaurant.id} name={restaurantName} />

			
		)
	})



	return (

		<Fragment>
			<Container fluid={true}>
				<Row>
					<Col>
						
						{listOfRestaurants}

					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

const mapStateToProps = state => {

	return {
		restaurants: state.restaurants
	}
	
}




export default connect (
	mapStateToProps,
	{ fetchRestaurants }
)(Dashboard)