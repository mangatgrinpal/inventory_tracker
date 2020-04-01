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

	useEffect(()=>{
		
		fetchRecords(id)
	},[id])

	const [quantityData, setQuantityData] = useState({})


	return (
		<Fragment>
			<Row className='border-top py-1'>
				<Col xs={12} md={4} className='clearfix py-1'>
					<div className='float-right'>
						<FontAwesomeIcon 
							icon='times'
							className='clickable-icon delete-icon'
							onClick={()=> { deleteItem(id, restaurant)}} />
					</div>
					<h6 className='py-4 py-md-0 item-name'>{name} ({units})</h6>
				</Col>

				{trackable_attributes.map( trackableAttribute => {

					let record = records.filter(record=> record.trackable_attribute.id == trackableAttribute.id)[0]

					return (
						<Fragment key={trackableAttribute.id}>
							<Col xs={5} className='d-md-none text-right py-1'>
								{trackableAttribute.name}
							</Col>
							<Col xs={5} md={2} className='pb-1 col-centered'>									
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