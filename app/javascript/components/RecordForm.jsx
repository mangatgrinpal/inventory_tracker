import React, { Fragment } from 'react';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const RecordForm = () => {
	return (
		<Form>
			<InputGroup>
				<Form.Control type='text' placeholder='0'/>
				<InputGroup.Append>
					<Button>
						Add
					</Button>
				</InputGroup.Append>

			</InputGroup>

		</Form>
	)
}

export default RecordForm