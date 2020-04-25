import React, { Fragment, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const HeroImage = () => {

	useEffect(()=>{
		changeBackground()
	})

	const changeBackground = () => {
		let baseURL = 'https://s3-us-west-1.amazonaws.com/ginnysbucket/dev-images/'
		let backgrounds = [ 
			'books-on-shelf.jpg', 
			'clear-wine-glass-on-table.jpg', 
			'warehouse.jpg',
			'table-in-vintage-restaurant.jpg' ];
		let heroImage = document.getElementById("hero-image")
		let i = 0


		// sets hero-image to images in backgrounds array using i to access index
		function slideShow() {
			heroImage.className += " fadeOut";
			setTimeout(()=> {
				heroImage.style.backgroundImage = "url(" + baseURL + backgrounds[i] + ")";

				heroImage.className = "row text-center";
			}, 1000)
			i++;
			if (i == backgrounds.length) { i = 0; }
			setTimeout(slideShow, 5000);
		}
		slideShow();
	}

	return (
		<Fragment>
			<Row>
				<Col className='hero-text text-center pt-5 mt-5'>
					<h1>Inventory Management System</h1>
					<p className='py-5'>Easily manage inventories on the go for your business.</p>
					<Link className='btn btn-primary' to='/sign-up'>Get started today</Link>
				</Col>
			</Row>
			<Row id='hero-image' className='text-center'>
				<Col className='hero-overlay h-100'/>
			</Row>
		</Fragment>
	)
}

export default HeroImage