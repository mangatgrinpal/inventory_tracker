import React, { Fragment, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

import { userSignIn } from '../actions/users';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserSignIn = ({ userSignIn }) => {

	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleClick = (e, email, password, history) => {

		e.preventDefault();
		userSignIn(email, password, history)
	}

	return (
		<Fragment>
			<Container>
				<Row>
					<Col>
						Sign In
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
						<Button variant="primary" onClick={(e)=>{handleClick(e, email, password, history)}}>
							Submit
						</Button>
					</Form>
				</Row>
				<Row>
					<Col>
						Don't have an account? <Link to='/sign-up'>Sign up</Link>
					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

const mapStateToProps = state => 
({
	users: state.users
})


export default connect(
	mapStateToProps,
	{ userSignIn }
	)(UserSignIn)