import React, { Fragment } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DashHome = ({ setRestaurantFormVisibility }) => {

	const handleClick = e => {
		e.preventDefault()
		setRestaurantFormVisibility(true)
	}

	return (
		<Fragment>
				<Row className='pt-5'>
					<Col className='text-center'>
						<h4 className='pb-5'> Looks like you haven't added any restaurants yet.</h4>
						<p>
							Click <a href='#!' onClick={e => {handleClick(e)}}>here</a> to get started.
						</p>
					</Col>
				</Row>
		</Fragment>
	)
}

export default DashHome