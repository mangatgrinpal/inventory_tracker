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
	recordList 
}) => {


	const { id, name, units, records } = item;



	return (
		<Fragment>
			<Row>
				<Col md={2}>
					{name} ({units})
					<Button variant='danger' onClick={()=> { deleteItem(id, restaurant)}}>
						x
					</Button>
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