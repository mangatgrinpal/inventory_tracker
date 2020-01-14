import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ItemForm = ({ 
	addItem, 
	restaurant, 
	setItemFormVisibility,
	currentUser 
}) => {

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
			<Container className='p-4'>
				<h6 className='section-name'>Add new item</h6>
				<Form onKeyPress={submitFormOnEnter} className='pt-5'>
					<Form.Row>
						<Col xs={12}>
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
					</Form.Row>
					<Form.Row>
						<Col xs={12}>
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
					</Form.Row>
					<Form.Row>
						<Col xs={12}>
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
					</Form.Row>
					<Form.Row>
						<Col xs={12}>
							<Button variant='danger pt-4' onClick={()=> {setItemFormVisibility(false)}}>
								Cancel
							</Button>

							<Button 
								className='pt-4' 
								onClick={(e)=> {handleClick(e)}} 
							>
								Add New Item
							</Button>
						</Col>
					</Form.Row>
				</Form>
			</Container>
		)
}

export default ItemForm