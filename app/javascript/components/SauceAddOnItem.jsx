import React, { Fragment, useEffect } from 'react';

import Record from './Record'; 

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
	updateRecord
}) => {


	const { id, name, units, records } = item;

	let yesterdaysCases = records.filter(record => record.record_type == 'Cases' && record.date == previousWorkDay)
	let cases = records.filter(record => record.record_type == 'Cases' && record.date == currentWorkDay)
	let onHand = records.filter(record => record.record_type == 'On Hand' && record.date == currentWorkDay)

	let sauceAddOnCaseValue = React.createRef()


	return (
		<Fragment>
			<Row className='border-top'>
				<Col xs={6} className='d-md-none'>
					Name (units)
				</Col>

				<Col xs={6} md={3} className='clearfix'>
					{name} ({units})
					<Button className='float-right' variant='danger' onClick={()=> { deleteItem(id, restaurant)}}>
						x
					</Button>
				</Col>
				
				<Col xs={6} className='d-md-none'>
					On hand
				</Col>
				<Col xs={6} md={4}>
					<ButtonGroup>
						<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'On Hand', restaurant, 'decrement')}}>
							&minus;
						</Button>
						<Button variant='light' className='value-display'>
							{onHand.length > 0 ? onHand[0].quantity : 0}
						</Button>
						<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'On Hand', restaurant, 'increment')}}>
							+
						</Button>
					</ButtonGroup>
					
				</Col>
				<Col xs={6} className='d-md-none'>
					Cases
				</Col>
				<Col xs={6} md={4}>
					<ButtonGroup>
						<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'Cases', restaurant, 'decrement')}}>
							&minus;
						</Button>
						<Button variant='light' className='value-display' ref={sauceAddOnCaseValue}>
							{cases.length > 0 ? cases[0].quantity : yesterdaysCases.length > 0 ? yesterdaysCases[0].quantity : 0}
						</Button>
						<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'Cases',restaurant, 'increment', sauceAddOnCaseValue.current.innerText) }} >
							+
						</Button>
					</ButtonGroup>
				</Col>		
			</Row>
		</Fragment>
	)
}

export default SauceAddOnItem