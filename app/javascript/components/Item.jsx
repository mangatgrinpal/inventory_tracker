import React, { Fragment } from 'react';

import Button from 'react-bootstrap/Button'


const Item = ({ item, deleteItem, restaurant }) => {
	const { id, attributes: { name, units }} = item;

	return (
		<Fragment>
			<li>
				{name}/{units}
				<Button onClick={()=> { deleteItem(id, restaurant)}}>
					x
				</Button>
			</li>
			
		</Fragment>
	)
}

export default Item