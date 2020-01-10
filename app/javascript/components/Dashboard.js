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

import { fetchRestaurants, addRestaurant, toggleRestaurantForm } from '../actions/restaurants';
import { setCurrentWorkDay, setPreviousWorkDay } from '../actions/weeks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Dashboard = ({
	fetchRestaurants, 
	addRestaurant,
	toggleRestaurantForm,
	setCurrentWorkDay,
	setPreviousWorkDay,
	currentDay,
	yesterday,
	restaurants: { isFetching, restaurantList, restaurantFormVisible },
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
								toggleRestaurantForm={toggleRestaurantForm}
								restaurantFormVisible={restaurantFormVisible}
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
						{restaurantFormVisible &&

						<Col xs={12} md={{span: 8, offset: 4}} className='form-panel-container fixed-top'>
							<a onClick={()=>{toggleRestaurantForm()}}>
							close
							</a>
							<RestaurantForm 
								addRestaurant={addRestaurant} 
								isHidden={isHidden} 
								toggleIsHidden={toggleIsHidden}
								currentUser={currentUser} />
						</Col>}
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
	{ fetchRestaurants, addRestaurant, setCurrentWorkDay, setPreviousWorkDay, toggleRestaurantForm }
)(Dashboard)