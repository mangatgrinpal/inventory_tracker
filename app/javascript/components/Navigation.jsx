import React from 'react';

import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSignOut } from '../actions/users';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({ 
	userSignOut,
	users: { currentUser }
}) => {

	const history = useHistory();


	const handleClick = (e, email, history) => {
		e.preventDefault()
		userSignOut(email, history)
	}

	return (
		<Navbar>
			<Nav className='ml-auto'>
				<Nav.Item>
					<LinkContainer to='/'>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					
				</Nav.Item>
				
				{currentUser && 

				<Nav.Item>
					<LinkContainer to='/dashboard'>
						<Nav.Link>Dashboard</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				}
				
				<Nav.Item>
					<LinkContainer to='/sign-in'>
						<Nav.Link>Sign In</Nav.Link>
					</LinkContainer>
					
				</Nav.Item>

				
				{ //currentUser && 

				<Nav.Item>
					<Nav.Link onClick={(e)=>{handleClick(e, 'ginny@mail.com', history)}}>Sign Out</Nav.Link>
				</Nav.Item>}
				
				
			</Nav>
		</Navbar>

		
	)
}

const mapStateToProps = state => 
({
	users: state.users
})

export default connect (
	mapStateToProps,
	{ userSignOut }
)(Navigation)