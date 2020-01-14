import React from 'react';

import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSignOut } from '../actions/users';
import { setRestaurantLinksVisibility } from '../actions/restaurants';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({ 
	userSignOut,
	setRestaurantLinksVisibility,
	users: { currentUser }
}) => {

	const history = useHistory();

	const handleClick = (e, email, history) => {
		e.preventDefault()
		userSignOut(email, history)
	}


	return (
		<Navbar collapseOnSelect className='navigation' expand='md' variant='dark'>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
  		<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Item>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						
					</Nav.Item>
					
	 

					<Nav.Item>
						<LinkContainer to='/dashboard' onClick={()=>{setRestaurantLinksVisibility(true)}}>
							<Nav.Link>Dashboard</Nav.Link>
						</LinkContainer>
					</Nav.Item>

					
					{ !currentUser &&
						<Nav.Item>
							<LinkContainer to='/sign-in'>
								<Nav.Link>Sign In</Nav.Link>
							</LinkContainer>
							
						</Nav.Item>
					}
					
					
					{ currentUser && 

					<Nav.Item>
						<Nav.Link onClick={(e)=>{handleClick(e, currentUser.email, history)}}>Sign Out</Nav.Link>
					</Nav.Item>}
					
				</Nav>
			</Navbar.Collapse>
		</Navbar>

		
	)
}

const mapStateToProps = state => 
({
	users: state.users,
	restaurants: state.restaurants
})

export default connect (
	mapStateToProps,
	{ userSignOut, setRestaurantLinksVisibility }
)(Navigation)