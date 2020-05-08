import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
	return (
		<Fragment>
			<Row id='footer' className='py-5'>
				<Col className='text-center'>
					<p>
						Track your inventories today
					</p>
				</Col>
				<Col>
					<ul>
						<li>
							<Link to='sign-up'>
								Sign up now
							</Link>
							
						</li>
						<li>
							<Link to='sign-in'>
								Sign in
							</Link>
						</li>
					</ul>
				</Col>
			</Row>
			<Row className='py-4 text-center'>
				<Col>
					&copy; {new Date().getFullYear()} Copyright: <a href='/'>Inventory Manager</a>
				</Col>
			</Row>
		</Fragment>
	)
}

export default Footer