import React, { Fragment, useState } from 'react';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const RecordForm = ({ 
	attributeId,
	item,
	updateRecord
}) => {

	const [ quantityData, setQuantityData ] = useState('')

	const handleBlur = e => {
		e.preventDefault()
		updateRecord(item, quantityData, attributeId)
	}

	return (
		
		<Form.Control 
			type='number'
			className='text-center'
			onBlur={(e)=> { handleBlur(e) }}
			value={quantityData}
			onChange={e => setQuantityData(e.target.value)}/>
				
	)
}

export default RecordForm