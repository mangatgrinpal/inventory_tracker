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
	updateRecord,
	currentUser
}) => {

	const { id, name, units, records } = item;

	let yesterdaysNonMarinatedCases = records.filter(record => record.record_type == 'Non-marinated cases' && record.date == previousWorkDay)
	let nonMarinatedCases = records.filter(record => record.record_type == 'Non-marinated cases' && record.date == currentWorkDay)
	let yesterdaysMarinatedCases = records.filter(record => record.record_type == 'Marinated cases' && record.date == previousWorkDay)
	let marinatedCases = records.filter(record => record.record_type == 'Marinated cases' && record.date == currentWorkDay)
	let yesterdaysSeparatedPans = records.filter(record => record.record_type == 'Separated pans' && record.date == previousWorkDay)
	let separatedPans = records.filter(record => record.record_type == 'Separated pans' && record.date == currentWorkDay)

	let nonMarinatedCaseValue = React.createRef()
	let marinatedCaseValue = React.createRef()
	let separatedPansValue = React.createRef()


	return (
		<Fragment>
			<Row className='border-top py-1'>

				<Col xs={12} md={3} className='clearfix py-1'>
					{ currentUser && (
						<Button 
							size='sm' 
							className='float-right' 
							variant='danger' 
							onClick={()=> { deleteItem(id, restaurant)}}
						>
							x
						</Button>
					)}
					
					<h6 className='item-name'>{name} ({units})</h6>
				</Col>
				
				<Col xs={6} className='d-md-none text-right py-1'>
					Marinated cases
				</Col>

				<Col xs={6} md={3} className='pb-1'>
					{ currentUser && (
						<Button 
							size='sm' 
							variant='outline-primary' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Marinated cases', restaurant, 'decrement')}}
						>
							&minus;
						</Button>
					)}
					
					<Button size='sm' variant='light' className='value-display' ref={marinatedCaseValue}>
						{marinatedCases.length > 0 ? marinatedCases[0].quantity : yesterdaysMarinatedCases.length > 0 ? yesterdaysMarinatedCases[0].value : 0}
					</Button>
					{ currentUser && (
						<Button 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Marinated cases', restaurant, 'increment', marinatedCaseValue.current.innerText)}}	
						>
							+
						</Button>
					)}
					
				
					
				</Col>
				<Col xs={6} className='d-md-none text-right py-1'>
					Separated pans
				</Col>
				<Col xs={6} md={3} className='pb-1'>
					{ currentUser && (
						<Button 
							size='sm' 
							variant='outline-primary' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Separated pans', restaurant, 'decrement')}}
						>
							&minus;
						</Button>
					)}
					
					<Button size='sm' variant='light' className='value-display' ref={separatedPansValue}>
						{separatedPans.length > 0 ? separatedPans[0].quantity : yesterdaysSeparatedPans.length > 0 ? yesterdaysSeparatedPans[0].value : 0}
					</Button>
					{ currentUser && (
						<Button 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Separated pans', restaurant, 'increment', separatedPansValue.current.innerText)}}
						>
							+
						</Button>
					)}
				</Col>
				<Col xs={6} className='d-md-none text-right py-1'>
					Non-marinated cases
				</Col>
				<Col xs={6} md={3} className='pb-1'>
					{ currentUser && (
						<Button 
							size='sm' 
							variant='outline-primary' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Non-marinated cases', restaurant, 'decrement')}}		
						>
							&minus;
						</Button>
					)}
					
					<Button size='sm' variant='light' className='value-display' ref={nonMarinatedCaseValue}>
						{nonMarinatedCases.length > 0 ? nonMarinatedCases[0].quantity : yesterdaysNonMarinatedCases.length > 0 ? yesterdaysNonMarinatedCases[0].quantity : 0}
					</Button>
					{ currentUser && (
						<Button 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Non-marinated cases',restaurant, 'increment', nonMarinatedCaseValue.current.innerText) }} 	
						>
							+
						</Button>
					)}
					
					
				</Col>		
			</Row>
		</Fragment>
	)
}

export default MeatItem