import React, { Fragment, useState } from 'react';

import { throttle } from 'lodash';

import ImageUploader from './ImageUploader';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const RestaurantForm = ({ 
	addRestaurant, 
	restaurantFormVisible,
	setRestaurantFormVisibility,
	isCreating,
	currentUser,
	errors 
}) => {

	const [ name, setName ] = useState('')
	const [ imageData, setImageData ] = useState([])
	const [ nameError, setNameError ] = useState('')
	const [ imageError, setImageError ] = useState('')

	const nameErrorHandler = () => {
		setNameError('Invalid restaurant name, please enter a valid name up to 64 characters.')
		document.getElementById('nameField').classList.add('invalid-error-frame')
	}

	const imageErrorHandler = () => {
		setImageError('Please select an image to use for your restaurant.')
		document.getElementById('imageField').classList.add('invalid-error-frame')

	}

	const validate = () => {

		const nameValid = name.length > 1 && name.length < 64
		const imageAttached = imageData.length === 1 


		if (!nameValid && !imageAttached) {
			nameErrorHandler()
			imageErrorHandler()
			return false
		}

		if (!nameValid) {

			nameErrorHandler()
			return false
		}

		if (!imageAttached) {

			imageErrorHandler()
			return false
		}
		return true
	}
	

	const handleSubmit = e => {
		e.preventDefault();
		setNameError('')
		setImageError('')

		document.getElementById('nameField').classList.remove('invalid-error-frame')
		
		

		const isValid = validate()

		if (isValid) {
			// must use FormData prototype in order to send it to active storage
			const restaurant = new FormData();
			restaurant.append('[restaurant]name', name)
			restaurant.append('[restaurant]image', imageData[0])

			addRestaurant(restaurant)
		}
	
		
		
	}

	const handleSubmitThrottled = throttle(handleSubmit,500)

	const submitFormOnEnter = e => {

		if (e.key === 'Enter') {
			const isValid = valiate()
			if (isValid) {
				setCreating(true)
				e.preventDefault()
				
				addRestaurant(name)		
			}
			
				
		}
	}

	return (
			<Container className='p-4'>
				<h6 className='section-name pt-4 pt-md-0'>Add new restaurant</h6>
				<Form 
					onKeyPress={submitFormOnEnter} 
					onSubmit={handleSubmitThrottled} 
					className='pt-5 pt-md-3'>
					<Form.Row>
						<Col>
							<Form.Label>
								Restaurant name
							</Form.Label>
							<Form.Control
								id='nameField'
								name='name' 
								type='text'
								placeholder='What is your restaurant called?'
								value={name}
								onChange={(e)=> setName(e.target.value)}
								/>
								<span style={{'color':'red'}}>{nameError}</span>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col className='pt-2'>
							<Form.Label>
								Choose image
							</Form.Label>

							<ImageUploader 
								imageData={imageData} 
								setImageData={setImageData}
								setImageError={setImageError} />
							<span style={{'color':'red'}}>{imageError}</span>

						</Col>
					</Form.Row>
					<Form.Row className='pt-2'>
						<Col className='clearfix'>
							<Button 
								type='submit'
								className='float-right'
								disabled={isCreating} >
								{isCreating ? 'Creating...':'Create restaurant'}
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