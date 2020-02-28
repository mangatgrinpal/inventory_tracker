import React, { Fragment, useEffect } from 'react';

import Record from './Record'; 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

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
	currentUser
}) => {


	const { id, name, units, trackable_attributes, records } = item;

	const columnWidth = trackable_attributes.length > 0 ? Math.floor(8/trackable_attributes.length) : 8	

	let caseValue = React.createRef()
	let onHandValue = React.createRef()




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

					return (
						<Fragment key={trackableAttribute.id}>
							<Col xs={6} className='d-md-none text-right py-1'>
								{trackableAttribute.name}
							</Col>
							<Col xs={5} md={columnWidth} className='pb-1'>

									<Button 
										variant='outline-primary' 
										size='sm' 
										onClick={()=> { updateRecord(currentWorkDay, id, 'On Hand', restaurant, 'decrement')}}
										
									>
										<FontAwesomeIcon icon='minus'/>
									</Button>

								
								<Button size='sm' variant='light' className='value-display' ref={onHandValue}>
									{trackableAttribute.name} value
								</Button>


									<Button 
										size='sm' 
										onClick={()=> { updateRecord(currentWorkDay, id, 'On Hand', restaurant, 'increment', onHandValue.current.innerText)}}
										
									>
										<FontAwesomeIcon icon='plus'/>
									</Button>	

								
								
							</Col>
						</Fragment>
					)
				})}
			</Row>
		</Fragment>
	)
}

export default Item