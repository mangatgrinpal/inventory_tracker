import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HeroDescription = () => {

	return (
		<Row className='justify-content-center text-center hero-description'>
			<Col xs={12} md={4}>
				<p>Easily add restaurants to track their inventories.</p>
			</Col>
			<Col xs={12} md={4}>
				<p>Add items to your restaurants, organized in categories to find them quickly.</p>
			</Col>
			<Col xs={12} md={4}>
				<p>Keep track of the quantities you need, on your computer or on the go.</p>
			</Col>
		</Row>
	)
}

export default HeroDescription