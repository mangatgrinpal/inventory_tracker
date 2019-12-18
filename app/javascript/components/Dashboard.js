import React, { Fragment, useEffect, useState } from 'react';
import Restaurant from './Restaurant';
import RestaurantLinks from './RestaurantLinks';
import Loading from './Loading';
import DashHome from './DashHome';
import RestaurantForm from './RestaurantForm';
import {  
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';

import { fetchRestaurants, addRestaurant } from '../actions/restaurants';
import { setCurrentWorkDay, setPreviousWorkDay } from '../actions/weeks';

import Container from 'react-bootstrap/Container';


const Dashboard = ({
	fetchRestaurants, 
	addRestaurant,
	setCurrentWorkDay,
	setPreviousWorkDay,
	currentDay,
	yesterday,
	restaurants: { isFetching, restaurantList }
}) => {

	const { path, url } = useRouteMatch();
	const [isHidden, toggleIsHidden] = useState(false);

	useEffect(()=> {

		setPreviousWorkDay(yesterday)
		setCurrentWorkDay(currentDay)
		fetchRestaurants();


	},[ fetchRestaurants, currentDay ])


	

	return (

		<Fragment>
			<Container>
				{isFetching ? 
					<Loading/> : 
					<Fragment>
						<RestaurantLinks
							restaurantList={restaurantList}
							isHidden={isHidden}
							toggleIsHidden={toggleIsHidden}
							addRestaurant={addRestaurant}
							/>
						
						<br/>
						<Switch>
							<Route exact path={path}>

							</Route>
							<Route path={`${path}/:id`}>
								<Restaurant />
							</Route>
						</Switch>
					</Fragment>
				}					
			</Container>
		</Fragment>
	)
}

const mapStateToProps = state => 
({
	restaurants: state.restaurants,
	weeks: state.weeks
})

export default connect (
	mapStateToProps,
	{ fetchRestaurants, addRestaurant, setCurrentWorkDay, setPreviousWorkDay }
)(Dashboard)