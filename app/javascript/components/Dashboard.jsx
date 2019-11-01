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



const Dashboard = ({ 
	fetchRestaurants, 
	addRestaurant,
	restaurants: { isFetching, restaurantList } 
}) => {

	let { path, url } = useRouteMatch();


	useEffect(()=> {
		fetchRestaurants()


	},[ fetchRestaurants ])


	const [isHidden, toggleIsHidden] = useState(false);



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
							{isHidden && 
								<RestaurantForm 
								addRestaurant={addRestaurant} 
								isHidden={isHidden} 
								toggleIsHidden={toggleIsHidden} />}
								
							{!isHidden && 
								<Button onClick={()=> {toggleIsHidden(!isHidden)}}>
									Add New Restaurant
								</Button>}
						</Col>
					</Row>
					<Row>
						<Col>
							{listOfRestaurantLinks}
								
								<Switch>
									<Route exact path={path}>

										<DashHome />

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
	{ fetchRestaurants, addRestaurant }
)(Dashboard)