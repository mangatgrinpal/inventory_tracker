import React from 'react';

import { NavLink } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {

	return (
		<Navbar>
			<Nav className='ml-auto'>
				<Nav.Item>
					<LinkContainer to='/'>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					
				</Nav.Item>
				
				<Nav.Item>
					<LinkContainer to='/dashboard'>
						<Nav.Link>Dashboard</Nav.Link>
					</LinkContainer>
					
				</Nav.Item>
				
			</Nav>
		</Navbar>

		
	)
}

export default Navigation