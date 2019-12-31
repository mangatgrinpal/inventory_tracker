import React, { Fragment, useEffect } from 'react';

import Record from './Record'; 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Item = ({ 
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
	
	let yesterdaysCases = records.filter(record => record.record_type == 'Cases' && record.date == previousWorkDay)
	let cases = records.filter(record => record.record_type == 'Cases' && record.date == currentWorkDay)
	let yesterdaysOnHand = records.filter(record => record.record_type == 'On Hand' && record.date == previousWorkDay)
	let onHand = records.filter(record => record.record_type == 'On Hand' && record.date == currentWorkDay)
	let needs = records.filter(record => record.record_type == 'Needs' && record.date == currentWorkDay)

	let caseValue = React.createRef()
	let onHandValue = React.createRef()




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
							<FontAwesomeIcon icon='minus' />
						</Button>
					)}
					
					<h6 className='item-name'>{name} ({units})</h6>
				</Col>
				
				<Col xs={6} className='d-md-none text-right py-1'>
					On Hand
				</Col>
				<Col xs={6} md={2} className='pb-1'>
					{ currentUser && (
						<Button 
							variant='outline-primary' 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'On Hand', restaurant, 'decrement')}}
							
						>
							<FontAwesomeIcon icon='minus'/>
						</Button>
					)}
					
					<Button size='sm' variant='light' className='value-display' ref={onHandValue}>
						{onHand.length > 0 ? onHand[0].quantity : yesterdaysOnHand.length > 0 ? yesterdaysOnHand[0].quantity : 0}
					</Button>

					{ currentUser && (
						<Button 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'On Hand', restaurant, 'increment', onHandValue.current.innerText)}}
							
						>
							<FontAwesomeIcon icon='plus'/>
						</Button>	
					)}
					
					
				</Col>

				<Col xs={6} className='d-md-none text-right py-1'>
					Needs
				</Col>
				<Col xs={6} md={2} className='pb-1'>

					{ currentUser && (
						<Button 
							variant='outline-primary' 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Needs', restaurant, 'decrement')}}
							
						>
							<FontAwesomeIcon icon='minus'/>
						</Button>
					)}
					
					<Button size='sm' variant='light' className='value-display'>
						{needs.length > 0 ? needs[0].quantity : 0}
					</Button>

					{ currentUser && (
						<Button 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Needs', restaurant, 'increment')}}
							
						>
							<FontAwesomeIcon icon='plus'/>
						</Button>
					)}
					
				</Col>
				<Col xs={6} className='d-md-none text-right py-1'>
					To be prepped
				</Col>
				<Col xs={6} md={2} className='pb-1'>
					<Button size='sm' variant='light' className='value-display'>
						{needs.length > 0 && onHand.length > 0 && (needs[0].quantity - onHand[0].quantity) > 0 ? 
							(needs[0].quantity - onHand[0].quantity) : 
							needs.length > 0 && onHand.length == 0 ?
							needs[0].quantity : 0}
					</Button>
				</Col>
				<Col xs={6} className='d-md-none text-right py-1'>
					Cases
				</Col>
				<Col xs={6} md={2} className='pb-1'>
					{ currentUser &&
						<Button 
							variant='outline-primary' 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Cases', restaurant, 'decrement')}}
							
						>
							<FontAwesomeIcon icon='minus'/>
						</Button>
					}
					
					<Button size='sm' variant='light' className='value-display' ref={caseValue}>
						{cases.length > 0 ? cases[0].quantity : yesterdaysCases.length > 0 ? yesterdaysCases[0].quantity : 0}
					</Button>
					{ currentUser &&
						<Button 
							size='sm' 
							onClick={()=> { updateRecord(currentWorkDay, id, 'Cases',restaurant, 'increment', caseValue.current.innerText) }} 
							
						>
							<FontAwesomeIcon icon='plus'/>
						</Button>
					}
					
				</Col>
			</Row>
		</Fragment>
	)
}

export default Item