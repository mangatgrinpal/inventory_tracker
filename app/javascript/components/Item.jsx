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
	restaurant 
}) => {

	const { id, attributes: { name, units }} = item;

	useEffect(()=> {
		fetchRecords(id);
	},[ id ])

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
					<Record itemId={id} />
				</Col>
				<Col md={2}>
					
				</Col>
				<Col md={2}>
				</Col>
				<Col md={2}>
				</Col>
			</Row>
		</Fragment>
	)
}

export default Item