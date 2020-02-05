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
	setRestaurantFormVisibility,
	setRestaurantLinksVisibility,
	restaurantFormVisible,
	addRestaurant,
	currentUser
}) => {

	const { url } = useRouteMatch();

	const listOfRestaurantLinks = restaurantList.map( restaurant => {

		let { id, name, image } = restaurant;

		return (
			<Fragment key={id}>
				<Col xs={5} md={3}>
					<Card>
						<div className='embed-responsive embed-responsive-1by1'>
							<Card.Img
								className='embed-responsive-item' 
								src={ 
									image ? 
									image.url : 
									'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/No-logo.svg/1024px-No-logo.svg.png' 
								}/>

							<Link to={`${url}/${id}`} onClick={()=>{setRestaurantLinksVisibility(false)}}>
								<Card.ImgOverlay>
									<Card.Text className='pt-5 text-white'>
										{name}
									</Card.Text>
								</Card.ImgOverlay>
							</Link>
						</div>
					</Card>
				</Col>
			</Fragment>
		)
	})

	return (
		<Fragment>
			<Container className='restaurant-links-section'>
				<Row className='py-4 py-md-5'>
					<Col xs={8}>
						<h5>Your restaurants</h5>
					</Col>
					{currentUser && (
					<Col xs={4} className='text-md-right pl-0'>
						<small> 
						<a className='clickable-icon' onClick={()=> {setRestaurantFormVisibility(true)}}>
							Add a restaurant
						</a>
						</small>
					</Col>
					)}
				</Row>

				<Row className='flex-nowrap'>
					{restaurantList.length > 0 ? 
						listOfRestaurantLinks :
						<Col xs={12}>
							Whoops! Looks like you have yet to add a restaurant. 
							<a onClick={()=> {setRestaurantFormVisibility(true)}}> Add one now</a>.
						</Col>
					}
				</Row>
			</Container>
			
		</Fragment>
	)
}

export default RestaurantLinks