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
	restaurants: { isFetching, restaurantList },
	users: { currentUser }
}) => {

	const { path, url } = useRouteMatch();
	const [isHidden, toggleIsHidden] = useState(false);
	const [hideLinks, toggleHideLinks] = useState(true);

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
						<CSSTransition
							in={hideLinks}
							timeout={500}
							classNames='slide'
						>
							<RestaurantLinks
								restaurantList={restaurantList}
								isHidden={isHidden}
								toggleIsHidden={toggleIsHidden}
								addRestaurant={addRestaurant}
								hideLinks={hideLinks}
								toggleHideLinks={toggleHideLinks}
								currentUser={currentUser}
							/>
						</CSSTransition>

						<br/>
						<Switch>
							<Route path={`${path}/:id`}>
								<Restaurant 
									hideLinks={hideLinks}
									toggleHideLinks={toggleHideLinks}
								/>
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
	weeks: state.weeks,
	users: state.users
})

export default connect (
	mapStateToProps,
	{ fetchRestaurants, addRestaurant, setCurrentWorkDay, setPreviousWorkDay }
)(Dashboard)