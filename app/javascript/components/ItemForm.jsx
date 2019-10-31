import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const ItemForm = ( { addRestaurant } ) => {
	const [ formData, setFormData ] = useState("")	


	return (
			<Form>
				<Form.Row>
					<Col sm={1}>
						<Form.Control 
							type="text"
							value={formData}
							onChange={(e)=> setFormData(e.target.value)}
							/>
					</Col>
					<Col>
						<Button onClick={ ()=>{addRestaurant(formData)} }>
							Add
						</Button>
					</Col>
				</Form.Row>
			</Form>
		)
}

export default ItemForm