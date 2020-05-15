import React, { Fragment, useState, useEffect } from 'react';
import CategoryForm from './CategoryForm';

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ItemForm = ({ 
	addItem, 
	restaurant, 
	setItemFormVisibility,
	deleteCategory,
	categoryList,
	fetchTrackableAttributes,
	trackableAttributeList,
	currentUser 
}) => {

	const [ nameData, setNameData ] = useState('')
	const [ itemNameError, setItemNameError ] = useState('')
	const [ unitsData, setUnitsData ] = useState('')
	const [ unitsError, setUnitsError ] = useState('')
	const [ categoryData, setCategoryData ] = useState('')
	const [ categoryError, setCategoryError ] = useState('')
	const [ attributesData, setAttributesData ] = useState([])
	const [ attributesError, setAttributesError ] = useState('')
	const [ newCategory, setNewCategory ] = useState(false)
	const [ newAttribute, setNewAttribute ] = useState('')
	const [ selectedCategory, setSelectedCategory ] = useState({})

	const submitFormOnEnter = e => {
		if (e.key === 'Enter') {
			addItem(nameData, unitsData, categoryData, restaurant)
		}
	}

	const newCategoryChecker = e => {

		let result = categoryList.filter(category => 
			category.title.toLowerCase() == e.target.value.toLowerCase()
			)

		setSelectedCategory(result)

		if (result.length > 0 || e.target.value == '') {
			setNewCategory(false)

		} else {
			setNewCategory(true)
		}
	}

	const handleCategoryChange = e => {
		setCategoryData(e.target.value)

		newCategoryChecker(e)

	}


	const handleAddAttribute = e => {
		e.preventDefault()
		let selectedAttribute = trackableAttributeList.filter(
			attribute => attribute.name.toLowerCase() == newAttribute.toLowerCase()
		)
		if (selectedAttribute.length > 0) {
			setAttributesData([...attributesData, selectedAttribute[0]])
		} else {
			setAttributesData([...attributesData, Object.assign({}, {name: newAttribute})])
		}
		
		setNewAttribute('')

	}

	const handleRemoveAttribute = e => {

		setAttributesData(attributesData.filter(attribute => attribute.name != e.currentTarget.id))
	}

	const itemNameErrorHandler = () => {
		setItemNameError('Invalid item name length, name can be up to 64 characters.')
		document.getElementById('itemNameField').classList.add('invalid-error-frame')
	}

	const unitErrorHandler = () => {
		setUnitsError('Invalid units name length, units can be up to 32 characters.')
		document.getElementById('unitField').classList.add('invalid-error-frame')
	}

	const categoryErrorHandler = () => {
		setCategoryError('Please select a category above or create a new one.')
		document.getElementById('categoryField').classList.add('invalid-error-frame')
	}

	const attributeErrorHandler = () => {
		setAttributesError('You need to choose at least one attribute to track for this new category.')
		document.getElementById('attributeField').classList.add('invalid-error-frame')
	}

	const validate = () => {
		// we'll define a function to validate the form
		const nameValid = nameData.length > 1 && nameData.length < 64
		const unitsValid = unitsData.length > 1 && unitsData.length < 64
		const categoryValid = selectedCategory.length === 1 || categoryData != ''


		if (!nameValid) {
			itemNameErrorHandler()
		}

		if (!unitsValid) {
			unitErrorHandler()
		}

		if (newCategory && attributesData.length === 0) {
			attributeErrorHandler()
		}

		if (!categoryValid) {
			categoryErrorHandler()
		}

		if (!unitsValid || !nameValid || !categoryValid) {
			return false
		}

		return true

	}

	const handleSelect = e => {
		setCategoryError('')
		document.getElementById('categoryField').classList.remove('invalid-error-frame')
	}

	const handleSubmit = e => {
		e.preventDefault()
		setItemNameError('')
		setUnitsError('')
		setCategoryError('')
		setAttributesError('')
		document.getElementById('itemNameField').classList.remove('invalid-error-frame')
		document.getElementById('unitField').classList.remove('invalid-error-frame')
		document.getElementById('categoryField').classList.remove('invalid-error-frame')

		const isValid = validate()

		if (isValid) {
			addItem(nameData, unitsData, categoryData, restaurant, attributesData)	
		}
		
		
	}

	return (
			<Container className='p-4'>
				<h6 className='section-name pt-4 pt-md-0'>Add new item</h6>
				<Form 
					onKeyPress={submitFormOnEnter} 
					onSubmit={e=> {handleSubmit(e)}}
					className='pt-5 pt-md-3'>
					<Form.Row>
						<Col xs={12}>
							<Form.Label>
								Item name
							</Form.Label>
							<Form.Control 
								id='itemNameField'
								type='text'
								placeholder='name'
								value={nameData}
								onChange={(e)=> setNameData(e.target.value)}
								/>
							<span style={{'color':'red'}}>{itemNameError}</span>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col xs={12}>
							<Form.Label>
								Size per unit
							</Form.Label>
							<Form.Control
								id='unitField' 
								type='text'
								placeholder='units'
								value={unitsData}
								onChange={(e)=> setUnitsData(e.target.value)}
								/>
							<span style={{'color':'red'}}>{unitsError}</span>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col xs={12}>
							<Form.Label>
								Prep category
							</Form.Label>
							<Form.Control
								id='categoryField' 
								type='text' 
								list='categories' 
								value={categoryData} 
								onChange={handleCategoryChange}
								onSelect={e=>{handleSelect(e)}} 
								onBlur={newCategoryChecker} />
							<datalist id='categories'>
								{categoryList.map(category => {
									return (
										<option key={category.id}>
											{category.title}
										</option>
									)
								})}
							</datalist>
							<span style={{'color':'red'}}>{categoryError}</span>
						</Col>
					</Form.Row>
					{selectedCategory.length > 0 && 

						<Form.Row>
							<Col xs={12}>
								<Form.Label>
									These are the attributes that this category will allow you to track.
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
						<CategoryForm
							attributesData={attributesData}
							attributesError={attributesError}
							setAttributesError={setAttributesError}
							handleAddAttribute={handleAddAttribute}
							newAttribute={newAttribute}
							setNewAttribute={setNewAttribute}
							trackableAttributeList={trackableAttributeList}
							handleRemoveAttribute={handleRemoveAttribute} />					
						}
					<Form.Row className='pt-2'>
						<div className='ml-auto'>
							

							
							<Button 
								className='mr-1' 
								variant='danger' 
								onClick={()=> {setItemFormVisibility(false)}}
							>
								Cancel
							</Button>
							<Button type='submit'>
								Add new item
							</Button>
						</div>
					</Form.Row>
				</Form>
			</Container>
		)
}

export default ItemForm