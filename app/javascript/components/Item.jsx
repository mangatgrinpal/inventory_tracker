import React, { Fragment } from 'react';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const Item = ({ item, deleteItem, restaurant }) => {
	const { id, attributes: { name, units }} = item;

	return (
		<Fragment>
			<ListGroup.Item>
				{name} ({units})
				<Button variant='danger' onClick={()=> { deleteItem(id, restaurant)}}>
					x
				</Button>
			</ListGroup.Item>
			
		</Fragment>
	)
}

export default Item