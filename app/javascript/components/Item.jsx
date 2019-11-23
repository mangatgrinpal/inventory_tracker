import React, { Fragment, useEffect } from 'react';

import Record from './Record'; 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const Item = ({ 
	item, 
	deleteItem,
	fetchRecords, 
	restaurant,
	recordList,
	currentWorkDay,
	incrementRecord,
	decrementRecord 
}) => {


	const { id, name, units, records } = item;
	let cases, onHand, needs


	return (
		<Fragment>
			<Row>
				<Col md={2}>
					{name} ({units})
					<Button variant='danger' onClick={()=> { deleteItem(id, restaurant)}}>
						x
					</Button>
				</Col>
				<Col md={2}>
					<Button size='sm' onClick={()=> { decrementRecord()}}>
						&minus;
					</Button>
					&nbsp;
					{cases = records.filter(record => record.record_type == 'Cases' && record.date == currentWorkDay) > 0 ? cases[0].quantity : 0}
					&nbsp;
					<Button size='sm' onClick={()=> {
						console.log('wtf')
						incrementRecord(currentWorkDay, id, 'Cases') 
					}} >
						+
					</Button>
				</Col>

				<Col md={2}>
					<Button size='sm'>
						&minus;
					</Button>
					&nbsp;
					{onHand = records.filter(record => record.record_type == 'On Hand' && record.date == currentWorkDay) > 0 ? onHand[0].quantity : 0}
					&nbsp;
					<Button size='sm'>
						+
					</Button>
				</Col>
				<Col md={2}>
					<Button size='sm'>
						&minus;
					</Button>
					&nbsp;
					{needs = records.filter(record => record.record_type == 'Needs' && record.date == currentWorkDay) > 0 ? needs[0].quantity : 0}
					&nbsp;
					<Button size='sm'>
						+
					</Button>
				</Col>
				<Col md={2}>
					&nbsp;
					{needs - onHand}
					&nbsp;
				</Col>				
				{/*records.map( record => {
					return(
						<Col key={record.id} md={2}>
							<Record record={record}/>
						</Col>
					)
				})*/}
				
				
				<Col md={2}>
				</Col>
			</Row>
		</Fragment>
	)
}

export default Item