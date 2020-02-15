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
				<h6 className='section-name pt-4 pt-md-0'>Add new item</h6>
				<Form onKeyPress={submitFormOnEnter} className='pt-5 pt-md-3'>
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
							<Form.Control type='text' list='categories' onChange={(e)=> setCategoryData(e.target.value)}/>
							<datalist id='categories'>
								<option>Line</option>
								<option>Meat</option>
								<option>Sauces/Add-ons</option>
								<option>Misc</option>
							</datalist>

						</Col>
					</Form.Row>
					<Form.Row className='pt-2'>
						<Col className='clearfix'>
							

							<Button className='float-right' onClick={(e)=> {handleClick(e)}} >
								Add new item
							</Button>
							<Button className='float-right' variant='danger' onClick={()=> {setItemFormVisibility(false)}}>
								Cancel
							</Button>
						</Col>
					</Form.Row>
				</Form>
			</Container>
		)
}

export default ItemForm