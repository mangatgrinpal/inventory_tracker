import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ItemForm = ({ 
	addItem, 
	restaurant, 
	setItemFormVisibility,
	categoryList,
	currentUser 
}) => {

	const [ nameData, setNameData ] = useState('')
	const [ unitsData, setUnitsData ] = useState('')
	const [ categoryData, setCategoryData ] = useState('')
	const [ attributesData, setAttributesData ] = useState([])
	const [ newCategory, setNewCategory ] = useState(false)
	const [ possibleAttributes, setPossibleAttributes ] = useState([])

	const [ selectedCategory, setSelectedCategory ] = useState({})

	const submitFormOnEnter = e => {
		if (e.key === 'Enter') {
			addItem(nameData, unitsData, categoryData, restaurant)
		}
	}

	useEffect(()=> {
		async function fetchAttributes() {
			try {
				const res = await axios.get('/trackable_attributes')

				const { data } = res;

				setPossibleAttributes(data)
			} catch(error) {
				console.log(error)
			}	
		}

		fetchAttributes();
		
		
	},[])



	

	const newCategoryChecker = e => {

		let result = categoryList.filter(category => 
			category.title.toLowerCase() == e.target.value.toLowerCase()
			)

		setSelectedCategory(result)

		if (result.length > 0) {
			setNewCategory(false)

		} else {
			setNewCategory(true)
		}
	}

	const handleCategoryChange = e => {
		setCategoryData(e.target.value)

		newCategoryChecker(e)


	}

	const handleAttributeUpdate = e => {

	}

	const handleClick = e => {
		e.preventDefault()
		addItem(nameData, unitsData, categoryData, restaurant)
		setNameData('')
		setUnitsData('')
		setCategoryData('')
	}

	console.log(selectedCategory)

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
							<Form.Control type='text' list='categories' onChange={handleCategoryChange}/>
							<datalist id='categories'>
								{categoryList.map(category => {
									return (
										<option key={category.id}>
											{category.title}
										</option>
									)
								})}
							</datalist>

						</Col>
					</Form.Row>
					{selectedCategory.length > 0 && 

						<Form.Row>
							<Col xs={12}>
								<Form.Label>
									Here are the trackable attributes for this category.
								</Form.Label>
								<ul>
									{selectedCategory[0].trackable_attributes.map( attribute => {
										return (
												<li key={attribute.id}>{attribute.name}</li>
											)
									})}
								</ul>
								
							</Col>
						</Form.Row>
					}

					{newCategory &&
						<Form.Row>
							<Col xs={12}>
								<Form.Label>
									Which quantities will this category keep track of? (Up to 4)
								</Form.Label>
								<InputGroup>
									<Form.Control type='text' list='trackable-attributes' onChange={handleAttributeUpdate} />
									<InputGroup.Append>
										<Button>
											Add attribute
										</Button>
									</InputGroup.Append>
								</InputGroup>
								
								<datalist id='trackable-attributes'>
									{possibleAttributes.length > 0 && possibleAttributes.map( attribute => {
										return (
											<option key={attribute.id}>{attribute.name}</option>
										)
									})}
								</datalist>
							</Col>
						</Form.Row>
					}

					

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