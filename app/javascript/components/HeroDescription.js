import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HeroDescription = () => {

	return (
		<Row className='justify-content-center'>
			<Col xs={12} md={4}>
				Hi
			</Col>
			<Col xs={12} md={4}>
				how
			</Col>
			<Col xs={12} md={4}>
				are you
			</Col>
		</Row>
	)
}

export default HeroDescription