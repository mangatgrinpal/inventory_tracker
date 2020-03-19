import React, { Fragment } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const CategoryForm = ({
	attributesData,
	handleAddAttribute,
	newAttribute,
	setNewAttribute,
	trackableAttributeList,
	handleRemoveAttribute
}) => {

	return (
		<Fragment>
			<Form.Row>
				<Col xs={12}>
					<Form.Label>
						Which quantities will this category keep track of? (Up to 4)
					</Form.Label>
					<InputGroup>
						<Form.Control type='text' list='trackable-attributes' value={newAttribute} onChange={e=>{setNewAttribute(e.target.value)}} />
						{	attributesData && attributesData.length < 4 && 
							<InputGroup.Append>
								<Button onClick={e=>{handleAddAttribute(e)}}>
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