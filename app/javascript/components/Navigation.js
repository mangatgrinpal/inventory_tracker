import React,{ Fragment } from 'react';

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
	users: { currentUser, isAuthenticated }
}) => {

	const history = useHistory();

	const handleClick = (e, history) => {
		e.preventDefault()
		userSignOut(history)
	}


	return (
		<Navbar collapseOnSelect className='navigation' expand='md' variant='dark'>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
  		<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ml-auto'>


					{ isAuthenticated ? (
						<Fragment>
							<Nav.Item>
								<LinkContainer to='/dashboard' onClick={()=>{setRestaurantLinksVisibility(true)}}>
									<Nav.Link>Dashboard</Nav.Link>
								</LinkContainer>
							</Nav.Item>
							<Nav.Item>
								<LinkContainer to='/sign-out' onClick={(e)=>{handleClick(e, history)}}>
									<Nav.Link >Sign Out</Nav.Link>
								</LinkContainer>
							</Nav.Item>
						</Fragment>
						
						) : (

						<Fragment>
							<Nav.Item>
								<LinkContainer to='/'>
									<Nav.Link>Home</Nav.Link>
								</LinkContainer>
							</Nav.Item>
							<Nav.Item>
								<LinkContainer to='/sign-in'>
									<Nav.Link>Sign In</Nav.Link>
								</LinkContainer>	
							</Nav.Item>
						</Fragment>

						)

					}
										
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