import React, { Fragment, useState } from 'react';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const RecordForm = ({ 
	attributeId,
	item,
	updateRecord,
	incrementRecord,
	decrementRecord,
	record
}) => {


	const quantity = record.length == 0 ? 0 : record[0].quantity



	let [ quantityData, setQuantityData ] = useState(quantity)

	const validate = () => {
		return !isNaN(quantityData) && 
						parseInt(Number(quantityData)) == quantityData && 
						!isNaN(parseInt(quantityData, 10));
	}

	const handleBlur = e => {
		e.preventDefault()
		let isValid = validate()
		if (isValid) {
			updateRecord(item, quantityData, attributeId)	
		}
	}

	const handleChange = e => {
		e.preventDefault()
		setQuantityData(e.target.value)
	}

	const handleIncrement = e => {
		e.preventDefault()
		incrementRecord(item, record[0].id)

	}

	const handleDecrement = e => {
		e.preventDefault()
		decrementRecord(item, record[0].id)

	}

	return (
		<InputGroup className='mx-auto px-md-3'>
			{/*<InputGroup.Prepend>
				<Button 
					variant='outline-primary' 
					size='sm' 
					onClick={(e)=> { handleDecrement(e) }}
					
				>
					<FontAwesomeIcon icon='minus'/>
				</Button>
			</InputGroup.Prepend>*/}
			<Form.Control 
				type='number'
				className='text-center'
				onBlur={(e)=> { handleBlur(e) }}
				value={quantityData}
				onChange={e => {handleChange(e)}} />
				{/*<InputGroup.Append>
					<Button 
						size='sm' 
						onClick={e => { handleIncrement(e) }}
						
					>
						<FontAwesomeIcon icon='plus'/>
					</Button>	
				</InputGroup.Append>*/}
			</InputGroup>
				
	)
}

export default RecordForm