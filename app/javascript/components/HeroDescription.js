import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HeroDescription = () => {

	return (
		<Fragment>
			<Row className='justify-content-start text-center hero-description pt-5 mt-5'>
				<Col xs={12} md={4}>
					<h6 className='section-name'>Add your restaurant</h6>
					<p>Easily add restaurants to track their inventories.</p>
				</Col>
			</Row>
			<Row className='justify-content-center text-center hero-description'>
				<Col xs={12} md={4}>
					<h6 className='section-name'>Add your items</h6>
					<p>Add items to your restaurants, organized in categories to find them quickly.</p>
				</Col>
			</Row>
			<Row className='justify-content-end text-center hero-description'>
				<Col xs={12} md={4}>
					<h6 className='section-name'>Start tracking</h6>
					<p>Keep track of the quantities you need, on your computer or on the go.</p>
				</Col>
			</Row>
		</Fragment>
	)
}

export default HeroDescription