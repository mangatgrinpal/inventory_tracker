import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';

import { userSignUp } from '../actions/users';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserSignUp = ({ userSignUp }) => {

	


	const [email, setEmail ] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');

	const handleClick = e => {
		e.preventDefault();
		userSignUp(email, password, passwordConfirmation)
	}



	return (
		<Fragment>
			<Container>
				<Row>
					<Col>
						Sign Up
					</Col>
				</Row>
				<Row>
					<Form>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Password Confirmation" onChange={(e)=>{setPasswordConfirmation(e.target.value)}} />
						</Form.Group>
						<Button variant="primary" type="submit" onClick={handleClick}>
							Submit
						</Button>
					</Form>
				</Row>
			</Container>
		</Fragment>
	)
}

const mapStateToProps = state => ({
	users: state.users
})

export default connect(
	mapStateToProps,
	{ userSignUp }
	)(UserSignUp)