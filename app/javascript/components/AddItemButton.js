import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AddItemButton = ({ setItemFormVisibility }) => {

	return (
		<Row className='border-top py-1'>
			<Col xs={12} md={4} className='text-center py-1'>
				<span className='clickable-icon' onClick={()=>{setItemFormVisibility(true)}}>
					<FontAwesomeIcon 
						icon='plus'
						className='add-icon'
						/>
					&nbsp;
					Add new item
				</span>
			</Col>
		</Row>
	)
}

export default AddItemButton