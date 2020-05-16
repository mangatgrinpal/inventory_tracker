import React, { Fragment, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const CategoryForm = ({
	attributesData,
	attributesError,
	setAttributesError,
	handleAddAttribute,
	newAttribute,
	setNewAttribute,
	newAttributeError,
	setNewAttributeError,
	newAttributeErrorHandler,
	trackableAttributeList,
	handleRemoveAttribute
}) => {

	

	const handleAddAttributeWrapper = e => {
		setAttributesError('')
		setNewAttributeError('')
		document.getElementById('attributeField').classList.remove('invalid-error-frame')
		const isValid = validate()
		if (!isValid) {
			handleAddAttribute(e)	
		} else {
			newAttributeErrorHandler()
		}
		
	}

	const validate = () => {
		return newAttribute.length === 0 || newAttribute.length > 64
	}

	return (
		<Fragment>
			<Form.Row>
				<Col xs={12}>
					<Form.Label>
						Which quantities will this category keep track of? (Up to 4)
					</Form.Label>
					<InputGroup>
						<Form.Control
							id='attributeField'
							type='text' 
							list='trackable-attributes' 
							value={newAttribute} 
							onChange={e=>{setNewAttribute(e.target.value)}} />
						{	attributesData && attributesData.length < 4 && 
							<InputGroup.Append>
								<Button onClick={e=>{handleAddAttributeWrapper(e)}}>
									Add attribute
								</Button>
							</InputGroup.Append>									
						}
					</InputGroup>
					<datalist id='trackable-attributes'>
						{trackableAttributeList && trackableAttributeList.length > 0 && trackableAttributeList.map( attribute => {
							return (
								<option key={attribute.id}>{attribute.name}</option>
							)
						})}
					</datalist>
					<span style={{'color':'red'}}>{attributesError}{newAttributeError}</span>
				</Col>
			</Form.Row>
			{ attributesData && attributesData.length > 0 &&
				<Form.Row>
					<Col xs={12}>
						<Form.Label>
							Selected attributes
						</Form.Label>
						<ul>
						
							{attributesData.map( (attribute,index) => {
								
								return (
									<li key={index}>
										{attribute.name}&nbsp;
										<FontAwesomeIcon
											id={attribute.name}
											icon='times'
											className='clickable-icon delete-icon'
											onClick={e=>{handleRemoveAttribute(e)}} />
									</li>
								)
							})}
						
						</ul>
					</Col>
				</Form.Row>
				}
		</Fragment>
	)

}

export default CategoryForm