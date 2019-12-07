import React from 'react';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSignOut } from '../actions/users';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({ userSignOut, users: { currentUser } }) => {

	const handleClick = e => {
		e.preventDefault()
		userSignOut()
	}

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
				<Nav.Item>
					<LinkContainer to='/sign-in'>
						<Nav.Link>Sign In</Nav.Link>
					</LinkContainer>
					
				</Nav.Item>
				<Nav.Item>

					<Nav.Link href='javascript:void(0)' onClick={handleClick}>Sign Out</Nav.Link>
					
				</Nav.Item>
				
			</Nav>
		</Navbar>

		
	)
}

const mapStateToProps = state => 
({
	users: state.users
})

export default connect(
	mapStateToProps,
	{ userSignOut }
	)(Navigation)