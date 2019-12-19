import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const ItemForm = ({ addItem, restaurant, setShowForm }) => {
	const [ nameData, setNameData ] = useState('')
	const [ unitsData, setUnitsData ] = useState('')
	const [ categoryData, setCategoryData ] = useState('Line')

	const submitFormOnEnter = e => {
		if (e.key === 'Enter') {
			addItem(nameData, unitsData, categoryData, restaurant)
		}
	}

	const handleClick = e => {
		e.preventDefault()
		addItem(nameData, unitsData, categoryData, restaurant)
		setNameData('')
		setUnitsData('')
		setCategoryData('Line')
	}

	return (
			<Form onKeyPress={submitFormOnEnter}>
				<Form.Row>
					<Col xs={12} md={3}>
						<Form.Label>
							Item name
						</Form.Label>
						<Form.Control 
							type='text'
							placeholder='name'
							value={nameData}
							onChange={(e)=> setNameData(e.target.value)}
							/>
					</Col>
					<Col xs={12} md={2}>
						<Form.Label>
							Size per unit
						</Form.Label>
						<Form.Control 
							type='text'
							placeholder='units'
							value={unitsData}
							onChange={(e)=> setUnitsData(e.target.value)}
							/>
					</Col>
					<Col xs={12} md={3}>
						<Form.Label>
							Prep category
						</Form.Label>
						<Form.Control as='select' onChange={(e)=> setCategoryData(e.target.value)}>
							<option>Line</option>
							<option>Meat</option>
							<option>Sauces/Add-ons</option>
							<option>Misc</option>
						</Form.Control>

					</Col>
					<Col xs={12} md={2}>
						<Button variant='danger pt-4' onClick={()=> {setShowForm(false)}}>
							Cancel
						</Button>
					</Col>
					<Col xs={12} md={2}>
						<Button className='pt-4' onClick={(e)=> {handleClick(e)}}>
							Add New Item
						</Button>
					</Col>
				</Form.Row>
			</Form>
		)
}

export default ItemForm