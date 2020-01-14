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

import { 
	fetchRestaurants, 
	addRestaurant, 
	setRestaurantFormVisibility,
	setRestaurantLinksVisibility
} from '../actions/restaurants';
import { setCurrentWorkDay, setPreviousWorkDay } from '../actions/weeks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Dashboard = ({
	fetchRestaurants, 
	addRestaurant,
	setRestaurantFormVisibility,
	setRestaurantLinksVisibility,
	setCurrentWorkDay,
	setPreviousWorkDay,
	currentDay,
	yesterday,
	restaurants: { 
		isFetching, 
		restaurantList, 
		restaurantFormVisible, 
		restaurantLinksVisible 
	},
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
							in={restaurantLinksVisible}
							timeout={600}
							unmountOnExit
							classNames='slide'
						>
							<RestaurantLinks
								restaurantList={restaurantList}
								addRestaurant={addRestaurant}
								setRestaurantLinksVisibility={setRestaurantLinksVisibility}
								setRestaurantFormVisibility={setRestaurantFormVisibility}
								restaurantFormVisible={restaurantFormVisible}
								currentUser={currentUser}
							/>
						</CSSTransition>

						<br/>
						<Switch>
							<Route path={`${path}/:id`}>
								<Restaurant 
									restaurantLinksVisible={restaurantLinksVisible}
									setRestaurantLinksVisibility={setRestaurantLinksVisibility}
								/>
							</Route>
						</Switch>
						<CSSTransition
							in={restaurantFormVisible}
							timeout={600}
							unmountOnExit
							classNames='slide-out'
						>
						

						<Col xs={12} md={{span: 6, offset: 6}} className='form-panel-container fixed-top pt-2'>

							<FontAwesomeIcon 
								className='clickable-icon' 
								title='Close'
								alt='Close'
								onClick={()=>{setRestaurantFormVisibility(false)}} 
								icon={['far', 'times-circle']} 
								size='2x' />

							<RestaurantForm 
								addRestaurant={addRestaurant} 
								restaurantFormVisible={restaurantFormVisible}
								setRestaurantFormVisibility={setRestaurantFormVisibility}
								currentUser={currentUser} />
						</Col>
						</CSSTransition>
						
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
	{ 
		fetchRestaurants, 
		addRestaurant, 
		setCurrentWorkDay, 
		setPreviousWorkDay, 
		setRestaurantFormVisibility,
		setRestaurantLinksVisibility
	}
)(Dashboard)