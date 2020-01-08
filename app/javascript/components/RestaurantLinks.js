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

		let { id, name, image } = restaurant;

		return (
			<Fragment key={id}>
				<Col xs={5} md={3}>
					<Card>
						<Card.Img src={ image ? image.url : 'https://ginnysbucket.s3-us-west-1.amazonaws.com/dev-images/vietnoms_badge_darkgray_edited_mini.png' }/>
						<Link to={`${url}/${id}`} onClick={()=>{toggleHideLinks(false)}}>
							<Card.ImgOverlay>
								<Card.Text className='pt-5 text-white'>
									{name}
								</Card.Text>
							</Card.ImgOverlay>
						</Link>
					</Card>
				</Col>
			</Fragment>
		)
	})

	return (
		<Fragment>
			<Container className='restaurant-links-section'>
				<Row>
					<Col xs={{span:10, offset: 1}} className='py-5'>
						<h4>Your restaurants</h4>
					</Col>
				</Row>

				<Row className='flex-nowrap'>
					{listOfRestaurantLinks}

					{!isHidden && currentUser && (
					<Col xs={3}> 
						<Button onClick={()=> {toggleIsHidden(!isHidden)}}>
							+
						</Button>
					</Col>)}

					{isHidden &&
					<Col md={3}>
						<RestaurantForm 
							addRestaurant={addRestaurant} 
							isHidden={isHidden} 
							toggleIsHidden={toggleIsHidden}
							currentUser={currentUser} />
					</Col>}
				</Row>
			</Container>
		</Fragment>
	)
}

export default RestaurantLinks