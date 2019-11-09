import React from 'react';

import { NavLink } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {

	return (
		<Navbar bg='dark'>
			<Nav>
				<Nav.Item>
					<LinkContainer to='/'>
						<Nav.Link to='/'>Home</Nav.Link>
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