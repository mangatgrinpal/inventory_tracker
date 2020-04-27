import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HeroDescription = () => {

	return (
		<Row className='justify-content-center text-center hero-description'>
			<Col xs={12} md={4}>
				Easily add restaurants to track their inventories.
			</Col>
			<Col xs={12} md={4}>
				Add items to your restaurants, organized in categories to find them quickly.
			</Col>
			<Col xs={12} md={4}>
				Keep track of the quantities you need, on your computer or on the go.
			</Col>
		</Row>
	)
}

export default HeroDescription