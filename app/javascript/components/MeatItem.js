import React, { Fragment, useEffect } from 'react';

import Record from './Record'; 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';


const MeatItem = ({ 
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
	let onHand = records.filter(record => record.record_type == 'Marinated cases' && record.date == currentWorkDay)
	let needs = records.filter(record => record.record_type == 'Separated pans' && record.date == currentWorkDay)

	let meatCaseValue = React.createRef()


	return (
		<Fragment>
			<Row className='border-top py-1'>

				<Col xs={12} md={3} className='clearfix'>
					
					<Button className='float-right' variant='danger' onClick={()=> { deleteItem(id, restaurant)}}>
						x
					</Button>
					<h6 className='item-name'>{name} ({units})</h6>
				</Col>
				
				<Col xs={6} className='d-md-none text-right'>
					Marinated cases
				</Col>

				<Col xs={6} md={3}>
					
					<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'Marinated cases', restaurant, 'decrement')}}>
						&minus;
					</Button>
					<Button size='sm' variant='light' className='value-display'>
						{onHand.length > 0 ? onHand[0].quantity : 0}
					</Button>
					<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'Marinated cases', restaurant, 'increment')}}>
						+
					</Button>
				
					
				</Col>
				<Col xs={6} className='d-md-none text-right'>
					Separated pans
				</Col>
				<Col xs={6} md={3}>
					
					<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'Separated pans', restaurant, 'decrement')}}>
						&minus;
					</Button>
					<Button size='sm' variant='light' className='value-display'>
						{needs.length > 0 ? needs[0].quantity : 0}
					</Button>
					<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'Separated pans', restaurant, 'increment')}}>
						+
					</Button>
				
				</Col>
				<Col xs={6} className='d-md-none text-right'>
					Non-marinated Cases
				</Col>
				<Col xs={6} md={3}>
					
					<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'Cases', restaurant, 'decrement')}}>
						&minus;
					</Button>
					<Button size='sm' variant='light' className='value-display' ref={meatCaseValue}>
						{cases.length > 0 ? cases[0].quantity : yesterdaysCases.length > 0 ? yesterdaysCases[0].quantity : 0}
					</Button>
					<Button size='sm' onClick={()=> { updateRecord(currentWorkDay, id, 'Cases',restaurant, 'increment', meatCaseValue.current.innerText) }} >
						+
					</Button>
					
				</Col>		
			</Row>
		</Fragment>
	)
}

export default MeatItem