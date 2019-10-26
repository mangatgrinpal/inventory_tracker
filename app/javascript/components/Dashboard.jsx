import React, { Fragment, useEffect, useState } from 'react';
import Restaurant from './Restaurant'
import Loading from './Loading'
import { 
	BrowserRouter as Router, 
	Switch, 
	Route, 
	Link, 
	useRouteMatch, 
	useParams 
} from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchRestaurants } from '../actions/restaurants'



import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



const Dashboard = ({ 
	fetchRestaurants, 
	restaurants: { isFetching, restaurantList } 
}) => {

	let { path, url } = useRouteMatch();


	useEffect(()=> {
		fetchRestaurants()


	},[ fetchRestaurants ])



	const listOfRestaurantLinks = restaurantList.map( restaurant => {



		let restaurantName = restaurant["attributes"].name
		let formattedRestaurantName = restaurantName.replace(/ /g,'_');


		return (
			<Fragment key={restaurant.id}>
				<Link to={`${url}/${formattedRestaurantName}`}>
					{restaurantName}
				</Link>
				<br/>
				
			</Fragment>
		)

	})

	const listOfRestaurantRoutes = restaurantList.map( restaurant => {
		let restaurantName = restaurant["attributes"].name
		let formattedRestaurantName = restaurantName.replace(/ /g,'_');

		return (
				
			<Route key={restaurant.id} path={`${path}/${formattedRestaurantName}`}>
				<Restaurant name={restaurantName} />
			</Route>
			
		)
	})


	return (

		<Fragment>
			<Router>
				<Container fluid={true}>
					<Row>
						<Col>
							<Button>
								Add New Restaurant
							</Button>
						</Col>
					</Row>
					<Row>
						<Col>
							{listOfRestaurantLinks}
								
								<Switch>
									<Route exact path='/'>
										<h3>Choose a restaurant</h3>

									</Route>
									{listOfRestaurantRoutes}
								</Switch>


						</Col>
					</Row>
					
				</Container>
			</Router>
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