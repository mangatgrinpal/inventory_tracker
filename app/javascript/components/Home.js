import React, { Fragment, useState, useEffect } from 'react'
import HeroImage from './HeroImage';
import HeroDescription from './HeroDescription';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {



	return (
		<Fragment>
			<Container fluid={true}>
				<HeroImage />
				<HeroDescription />
				<Footer />
			</Container>
		</Fragment>
	)
}

export default Home