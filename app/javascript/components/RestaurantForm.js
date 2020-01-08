import React, { useState } from 'react';

import ImageUploader from './ImageUploader';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const RestaurantForm = ({ 
	addRestaurant, 
	isHidden, 
	toggleIsHidden,
	currentUser 
}) => {

	const [ formData, setFormData ] = useState('')
	const [ imageData, setImageData ] = useState('')


	const handleClick = () => {
		addRestaurant(formData, imageData, isHidden, toggleIsHidden)
		
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
			<Form onKeyPress={submitFormOnEnter}>
				<Form.Row>
					<Col>
						<Form.Control 
							type='text'
							value={formData}
							onChange={(e)=> setFormData(e.target.value)}
							/>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>

						<ImageUploader imageData={imageData} setImageData={setImageData}/>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Button onClick={handleClick}>
							Add
						</Button>
						<Button variant='danger' onClick={()=> {toggleIsHidden(!isHidden)}}>
							Cancel
						</Button>
					</Col>
				</Form.Row>
			</Form>
		)
}

export default RestaurantForm