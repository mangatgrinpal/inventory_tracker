import React, { Fragment, useState } from 'react';

import ImageUploader from './ImageUploader';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const RestaurantForm = ({ 
	addRestaurant, 
	restaurantFormVisible,
	setRestaurantFormVisibility,
	currentUser 
}) => {

	const [ formData, setFormData ] = useState('')
	const [ imageData, setImageData ] = useState([])


	const handleClick = e => {
		// must use FormData prototype in order to send it to active storage
		e.preventDefault();
		const restaurant = new FormData();
		restaurant.append('[restaurant]name', formData)
		restaurant.append('[restaurant]image', imageData[0])

		addRestaurant(restaurant)
		
	}

	const submitFormOnEnter = e => {

		if (e.key === 'Enter') {
			e.preventDefault()
			if (currentUser != null) {
				addRestaurant(formData)	
			}	
		}
	}

	return (
			<Container className='p-4'>
				<h6 className='section-name pt-4 pt-md-0'>Add new restaurant</h6>
				<Form onKeyPress={submitFormOnEnter} className='pt-5 pt-md-3'>
					<Form.Row>
						<Col>
							<Form.Label>
								Restaurant name
							</Form.Label>
							<Form.Control 
								type='text'
								placeholder='What is your restaurant called?'
								value={formData}
								onChange={(e)=> setFormData(e.target.value)}
								/>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col className='pt-2'>
							<Form.Label>
								Choose image
							</Form.Label>
							<ImageUploader imageData={imageData} setImageData={setImageData}/>
						</Col>
					</Form.Row>
					<Form.Row className='pt-2'>
						<Col className='clearfix'>
							<Button className='float-right' onClick={handleClick}>
								Create restaurant
							</Button>
							<Button className='float-right' variant='danger' onClick={()=> {setRestaurantFormVisibility(false)}}>
								Cancel
							</Button>
							
						</Col>
					</Form.Row>
				</Form>
			</Container>
		)
}

export default RestaurantForm