import React, { Fragment, useEffect, useState } from 'react';
import Restaurant from './Restaurant'
import Loading from './Loading'
import DashHome from './DashHome'
import RestaurantForm from './RestaurantForm'
import { 
	BrowserRouter as Router, 
	Switch, 
	Route, 
	Link, 
	useRouteMatch, 
	useParams
} from 'react-router-dom'


import { connect } from 'react-redux'

import { fetchRestaurants, addRestaurant } from '../actions/restaurants'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'



const Dashboard = ({
	fetchRestaurants, 
	addRestaurant,
	restaurants: { isFetching, restaurantList } 
}) => {

	const { path, url } = useRouteMatch();


	useEffect(()=> {
		fetchRestaurants()


	},[ fetchRestaurants ])


	const [isHidden, toggleIsHidden] = useState(false);

	const listOfRestaurantLinks = restaurantList.map( restaurant => {

		let restaurantName = restaurant["attributes"].name
		let formattedRestaurantName = restaurantName.replace(/ /g,'_');


		return (
			<Fragment key={restaurant.id}>
				<Col md={3}>
					<Card>
						<Link to={`${url}/${formattedRestaurantName}`}>
							<Card.Body>
								<Card.Title>
									{restaurantName}
								</Card.Title>
							</Card.Body>
						</Link>
					</Card>
				</Col>
			</Fragment>
		)

	})

	const listOfRestaurantRoutes = restaurantList.map( restaurant => {

		let restaurantName = restaurant["attributes"].name
		let formattedRestaurantName = restaurantName.replace(/ /g,'_');

		return (
				
			<Route key={restaurant.id} path={`${path}/${formattedRestaurantName}`}>
				<Restaurant restaurant={restaurant} />
			</Route>
			
		)
	})


	return (

		<Fragment>
			<Router>
				<Container fluid={true}>
					{isFetching ? 
						<Loading/> : 
						<Row>
							<Col> 
								<Row>
								{listOfRestaurantLinks}

									{!isHidden &&
									<Col md={3}> 
										<Button onClick={()=> {toggleIsHidden(!isHidden)}}>
											+
										</Button>
									</Col>}

									{isHidden &&
									<Col md={3}>
										<RestaurantForm 
										addRestaurant={addRestaurant} 
										isHidden={isHidden} 
										toggleIsHidden={toggleIsHidden} />
									</Col>}
								</Row>

								
									
								<Switch>
									<Route exact path={path}>

										<DashHome />

									</Route>
									{listOfRestaurantRoutes}
								</Switch>

							</Col>
						</Row>
					}					
				</Container>
			</Router>
		</Fragment>
	)
}

const mapStateToProps = state => 
({
	restaurants: state.restaurants
})


export default connect (
	mapStateToProps,
	{ fetchRestaurants, addRestaurant }
)(Dashboard)