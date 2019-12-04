import React, { Fragment, useEffect, useState } from 'react';
import Restaurant from './Restaurant';
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

import { connect } from 'react-redux';

import { fetchRestaurants, addRestaurant } from '../actions/restaurants';
import { setCurrentWorkDay, setPreviousWorkDay } from '../actions/weeks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

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


	const listOfRestaurantLinks = restaurantList.map( restaurant => {

		let { id, name } = restaurant;

		return (
			<Fragment key={id}>
				<Col md={2}>
					<Card className='py-1'>
						<Link to={`${url}/${id}`}>
							<Card.Body>
								<Card.Title>
									{name}
								</Card.Title>
							</Card.Body>
						</Link>
					</Card>
				</Col>
			</Fragment>
		)

	})

	return (

		<Fragment>
			<Container className='h-100'>
				{isFetching ? 
					<Loading/> : 
					<Row>
						<Col>
							<Row>
								<Col>
									<h1>Choose a restaurant to get started.</h1>
								</Col>
							</Row>

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
							<br/>
							<Switch>
								<Route exact path={path}>

								</Route>
								<Route path={`${path}/:id`}>
									<Restaurant />
								</Route>

							</Switch>

						</Col>
					</Row>
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