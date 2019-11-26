import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const ItemForm = ({ addItem, restaurant }) => {
	const [ nameData, setNameData ] = useState('')
	const [ unitsData, setUnitsData ] = useState('')
	const [ categoryData, setCategoryData ] = useState('Line')

	console.log(categoryData)

	return (
			<Form>
				<Form.Row>
					<Col>
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
					<Col>
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
					<Col>
						<Form.Label>
							Prep category
						</Form.Label>
						<Form.Control as='select' onChange={(e)=> setCategoryData(e.target.value)}>
							<option>Line</option>
							<option>Misc</option>
						</Form.Control>

					</Col>
					<Col>
						<Button className='mt-4' onClick={()=> {addItem(nameData, unitsData, categoryData, restaurant)}}>
							Add New Item
						</Button>
					</Col>
				</Form.Row>
			</Form>
		)
}

export default ItemForm