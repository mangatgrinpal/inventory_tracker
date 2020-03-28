import React, { Fragment, useState } from 'react';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const RecordForm = ({ 
	attributeId,
	item,
	updateRecord,
	record
}) => {

	const baseState = record.length === 1 ? record[0].quantity : 0
	const [ quantityData, setQuantityData ] = useState(baseState)


	const handleBlur = e => {
		e.preventDefault()
		updateRecord(item, quantityData, attributeId)
	}

	const handleChange = e => {
		e.preventDefault()
		setQuantityData(e.target.value)
	}

	return (
		
		<Form.Control 
			type='number'
			className='text-center'
			onBlur={(e)=> { handleBlur(e) }}
			value={quantityData}
			onChange={e => {handleChange(e)}} />
				
	)
}

export default RecordForm