import React, { Fragment, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RestaurantLinks = ({
	restaurantList,
	isHidden,
	toggleIsHidden,
	addRestaurant
}) => {

	const { url } = useRouteMatch();

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
			<Row>
				<Col>
					<h3>Choose a restaurant to get started.</h3>
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
		</Fragment>
	)
}

export default RestaurantLinks