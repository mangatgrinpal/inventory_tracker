import React, { Fragment } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DashHome = ({ setRestaurantFormVisibility }) => {

	return (
		<Fragment>
				<Row className='pt-5'>
					<Col className='text-center'>
						<h4 className='pb-5'> Looks like you haven't added any restaurants yet.</h4>
						<a className='clickable-icon' onClick={()=>{setRestaurantFormVisibility(true)}}>
							Click here to get started.
						</a>
					</Col>
				</Row>
		</Fragment>
	)
}

export default DashHome