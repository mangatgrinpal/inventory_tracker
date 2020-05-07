import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HeroDescription = () => {

	return (
		<Fragment>
			<Row className='justify-content-center text-center pt-3'>
				<Col xs={12} className='align-self-end'>
					<h3 className='section-name'>
						Getting started is easy
					</h3>
				</Col>
			</Row>
			<Row className='justify-content-start text-center text-md-right hero-description pt-5 mt-5'>
				<Col xs={12} md={4}>
					<h6 className='item-name'>Add your restaurant</h6>
					<p>
						Easily add restaurants to track their inventories. 
						Although this was created with restaurants in mind, 
						you can track virtually any type of inventory.
					</p>
				</Col>
				<Col className='embed-responsive' xs={12} md={{span: 4, offset:3}}>
					<img 
						src='https://ginnysbucket.s3-us-west-1.amazonaws.com/dev-images/add_restaurant_preview_mac.png'
						className='embed-responsive-item' />
				</Col>
			</Row>
			<Row className='justify-content-start text-right hero-description'>
				<Col xs={12} md={4}>
					<h6 className='item-name'>Add your items</h6>
					<p>
						Add items to your restaurants, organized in categories to find them quickly. 
						You'll create your own categories to keep your inventory organized. 
						You will also specify what you plan to track with each category.
					</p>
				</Col>				
				<Col className='embed-responsive' xs={12} md={{span: 4, offset:3}}>
					<img 
						src='https://ginnysbucket.s3-us-west-1.amazonaws.com/dev-images/add_item_view_mac.png'
						className='embed-responsive-item' />
				</Col>
			</Row>
			<Row className='justify-content-start text-right hero-description'>
				<Col xs={12} md={4}>
					<h6 className='item-name'>Start tracking</h6>
					<p>
						Keep track of the quantities you need, on your computer or on the go.
					</p>
				</Col>
			</Row>
		</Fragment>
	)
}

export default HeroDescription