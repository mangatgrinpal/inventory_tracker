import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const RestaurantForm = ({ 
	addRestaurant, 
	isHidden, 
	toggleIsHidden 
}) => {

	const [ formData, setFormData ] = useState("")	

	const handleClick = () => {
		addRestaurant(formData)
		setTimeout(()=>{
			toggleIsHidden(!isHidden)
		},500)
	}

	return (
			<Form>
				<Form.Row>
					<Col sm={2}>
						<Form.Control 
							type="text"
							value={formData}
							onChange={(e)=> setFormData(e.target.value)}
							/>
					</Col>
					<Col>
						<Button onClick={handleClick}>
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