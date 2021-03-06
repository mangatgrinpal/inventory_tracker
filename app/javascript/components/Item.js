import React, { Fragment, useEffect, useState } from 'react';

import Record from './Record';
import RecordForm from './RecordForm';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Item = ({ 
	item, 
	deleteItem,
	editingItem,
	fetchRecords, 
	restaurant,
	recordList,
	currentWorkDay,
	previousWorkDay,
	updateRecord,
	incrementRecord,
	decrementRecord,
	currentUser
}) => {


	const { id, name, units, trackable_attributes, records } = item;

	const [editing, setEditing ] = useState(false)
	const [quantityData, setQuantityData] = useState({})

	useEffect(()=>{
		
		fetchRecords(id)
	},[id])

	const handleDelete = e => {
		e.preventDefault()
		deleteItem(id, restaurant)
		setEditing(false)
	}




	return (
		<Fragment>
			<Row className='border-top py-1'>
				<Col xs={12} md={4} className='py-1'>
					<Row>
						<Col xs={12} md={10} className='pb-4 py-md-0 item-name order-2 order-md-1 text-center'>
							{name} ({units})
						</Col>
						<Col xs={12} md={2} className='px-2 text-right order-1 order-md-2'>

							{ editing ? 
								<Fragment>
									<FontAwesomeIcon
										title='Save' 
										icon='check'
										className='clickable-icon add-icon'
										onClick={e => { setEditing(false)}} />
										&nbsp;&nbsp;

									<FontAwesomeIcon
										title='Delete item' 
										icon='times'
										className='clickable-icon delete-icon'
										onClick={e => { handleDelete(e)}} />
									
								</Fragment>
								: 
								<FontAwesomeIcon
									title='Edit item' 
									icon='pen'
									className='clickable-icon'
									onClick={()=>{setEditing(true)}} />
							}

						</Col>
						
					</Row>
					<Row className='text-center'>
					
					</Row>
					
					
				</Col>

				{trackable_attributes.map( trackableAttribute => {

					let record = records.filter(record=> record.trackable_attribute.id == trackableAttribute.id)

					return (
						<Fragment key={trackableAttribute.id}>
							<Col xs={6} className='d-md-none text-right py-1'>
								{trackableAttribute.name}
							</Col>
							<Col xs={3} md={2} className='pb-1 col-md-centered'>									
								<RecordForm
									item={id}
									record={record} 
									attributeId={trackableAttribute.id}
									updateRecord={updateRecord}
									incrementRecord={incrementRecord}
									decrementRecord={decrementRecord} />

							</Col>
						</Fragment>
					)
				})}
			</Row>
		</Fragment>
	)
}

export default Item