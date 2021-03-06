import React, { Fragment, useEffect } from 'react';

import Record from './Record'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';


const SauceAddOnItem = ({ 
	item, 
	deleteItem,
	fetchRecords, 
	restaurant,
	recordList,
	currentWorkDay,
	previousWorkDay,
	updateRecord,
	currentUser
}) => {


	const { id, name, units, records } = item;

	let yesterdaysOnHand = records.filter(record => record.record_type == 'On Hand' && record.date == previousWorkDay)
	let onHand = records.filter(record => record.record_type == 'On Hand' && record.date == currentWorkDay)

	let onHandValue = React.createRef()


	return (
		<Fragment>
			<Row className='border-top py-1'>
				

				<Col xs={12} md={3} className='clearfix py-1'>
					{ currentUser && (
						<div className='float-right'>
							<FontAwesomeIcon 
								icon='times'
								className='clickable-icon delete-icon'
								onClick={()=> { deleteItem(id, restaurant)}} />
						</div>
					)}
					
					<h6 className='py-4 py-md-0 item-name'>{name} ({units})</h6>
				</Col>
				
				<Col xs={6} className='d-md-none text-right py-1'>
					On hand
				</Col>
				<Col xs={5} md={{span: 2, offset: 2}} className='pb-1'>
					{ currentUser && (
						<Button 
							size='sm' 
							variant='outline-primary' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'On Hand', restaurant, 'decrement')}}
						>
							<FontAwesomeIcon icon='minus' />
						</Button>
					)}
					
					<Button size='sm' variant='light' className='value-display' ref={onHandValue}>
						{onHand.length > 0 ? onHand[0].quantity : yesterdaysOnHand.length > 0 ? yesterdaysOnHand[0].quantity: 0}
					</Button>

					{ currentUser && (
						<Button 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'On Hand', restaurant, 'increment', onHandValue.current.innerText)}}	
						>
							<FontAwesomeIcon icon='plus' />
						</Button>
					)}
					
					
				</Col>	
			</Row>
		</Fragment>
	)
}

export default SauceAddOnItem