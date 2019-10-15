import React from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const ItemForm = () => {
	return (
			<Form>
				<Form.Row>
					<Col sm={1}>
						<Form.Control 
							type="text"
							placeholder="Ginny"
							/>
					</Col>
					<Col>
						<Button>
							Add
						</Button>
					</Col>
				</Form.Row>
			</Form>
		)
}

export default ItemForm