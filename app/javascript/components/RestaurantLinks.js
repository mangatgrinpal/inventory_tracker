import React, { Fragment, useEffect, useState } from 'react';
import RestaurantForm from './RestaurantForm';
import { Link, useRouteMatch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RestaurantLinks = ({
	restaurantList,
	isHidden,
	toggleIsHidden,
	addRestaurant,
	hideLinks,
	toggleHideLinks,
	currentUser
}) => {

	const { url } = useRouteMatch();

	const listOfRestaurantLinks = restaurantList.map( restaurant => {

		let { id, name } = restaurant;

		return (
			<Fragment key={id}>
				<Col xs={6} md={3}>
					<Card className='py-1'>
						<Link to={`${url}/${id}`} onClick={()=>{toggleHideLinks(false)}}>
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
			<div className='restaurant-links-section'>
				<Row>
					<Col xs={{span:10, offset: 1}} className='pt-2 pb-5 text-center'>
						<h3>Choose a restaurant to get started</h3>
					</Col>
				</Row>

				<Row>			
					{listOfRestaurantLinks}

					{!isHidden &&
					<Col xs={3}> 
						<Button onClick={()=> {toggleIsHidden(!isHidden)}}>
							+
						</Button>
					</Col>}

					{isHidden &&
					<Col md={3}>
						<RestaurantForm 
							addRestaurant={addRestaurant} 
							isHidden={isHidden} 
							toggleIsHidden={toggleIsHidden}
							currentUser={currentUser} />
					</Col>}
				</Row>
			</div>
		</Fragment>
	)
}

export default RestaurantLinks