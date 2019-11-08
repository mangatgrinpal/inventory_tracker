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
	const [isHidden, toggleIsHidden] = useState(false);

	useEffect(()=> {
		fetchRestaurants()

	},[ fetchRestaurants ])


	const listOfRestaurantLinks = restaurantList.map( restaurant => {

		let { id, attributes: { name }} = restaurant;

		return (
			<Fragment key={id}>
				<Col md={2}>
					<Card>
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
			<Container fluid={true}>
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

							<Switch>
								<Route exact path={path}>
									<h1>sup dude</h1>
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
	restaurants: state.restaurants
})


export default connect (
	mapStateToProps,
	{ fetchRestaurants, addRestaurant }
)(Dashboard)