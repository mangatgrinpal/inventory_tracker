import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const RestaurantForm = ({ 
	addRestaurant, 
	isHidden, 
	toggleIsHidden,
	currentUser 
}) => {

	const [ formData, setFormData ] = useState("")	

	// change this set timeout function later
	const handleClick = () => {
		addRestaurant(formData, isHidden, toggleIsHidden)
		
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
							type="text"
							value={formData}
							onChange={(e)=> setFormData(e.target.value)}
							/>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Button onClick={handleClick} disabled={currentUser === null}>
							Add
						</Button>
						<Button variant="danger" onClick={()=> {toggleIsHidden(!isHidden)}}>
							Cancel
						</Button>
					</Col>
				</Form.Row>
			</Form>
		)
}

export default RestaurantForm