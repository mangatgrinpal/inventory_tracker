import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const ItemForm = ({ addItem, restaurant }) => {
	const [ nameData, setNameData ] = useState("")
	const [ unitsData, setUnitsData ] = useState("")


	return (
			<Form>
				<Col>
					<Form.Row>
						<Col>
							<Form.Control 
								type="text"
								placeholder="name"
								value={nameData}
								onChange={(e)=> setNameData(e.target.value)}
								/>
						</Col>
						<Col>
							<Form.Control 
								type="text"
								placeholder="units"
								value={unitsData}
								onChange={(e)=> setUnitsData(e.target.value)}
								/>
						</Col>
						<Col>
							<Button onClick={()=> {addItem(nameData, unitsData, restaurant)}}>
								Add
							</Button>
						</Col>
					</Form.Row>
				</Col>
			</Form>
		)
}

export default ItemForm