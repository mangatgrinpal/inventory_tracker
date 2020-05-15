import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const HeroDescription = () => {

	return (
		<Fragment>
			<Row className='justify-content-center text-center pt-5'>
				<Col xs={12}>
					<h3 className='section-name'>
						Getting started is easy
					</h3>
				</Col>
			</Row>
			<Row className='justify-content-start text-center text-md-right hero-description py-5 mt-5'>
				<Col xs={12} md={{span: 4, offset: 1}}>
					<h6 className='item-name'>Add your restaurant</h6>
					<p>
						Easily add restaurants to track their inventories. 
						Although this was created with restaurants in mind, 
						you can track virtually any type of inventory.
					</p>
				</Col>
				<Col xs={12} md={{span: 4, offset:1}}>
					<Image 
						src='https://ginnysbucket.s3-us-west-1.amazonaws.com/dev-images/add_restaurant_preview_mac.png'
						fluid />
				</Col>
			</Row>
			<Row className='justify-content-start text-center text-md-right hero-description py-5'>
				<Col xs={12} md={{span: 4, offset: 1}}>
					<h6 className='item-name'>Add your items</h6>
					<p>
						Add items to your restaurants, organized in categories to find them quickly. 
						You'll create your own categories to keep your inventory organized. 
						You will also specify what you plan to track with each category.
					</p>
				</Col>				
				<Col xs={12} md={{span: 4, offset: 1}}>
					<Image 
						src='https://ginnysbucket.s3-us-west-1.amazonaws.com/dev-images/add_item_view_mac_new.png'
						fluid />
				</Col>
			</Row>
			<Row className='justify-content-start text-center text-md-right hero-description py-5'>
				<Col xs={12} md={{span: 4, offset: 1}}>
					<h6 className='item-name'>Start tracking</h6>
					<p>
						Keep track of the quantities you need, on your computer or on the go.
					</p>
				</Col>
				
				<Col xs={{span: 6, offset: 3}} md={{span: 2, offset: 2}}>
					<Image 
						src='https://ginnysbucket.s3-us-west-1.amazonaws.com/dev-images/inventory_preview_iphone.png'
						fluid />
				</Col>

			</Row>
		</Fragment>
	)
}

export default HeroDescription