import React, { Fragment, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserSignUp = () => {

	


	const [email, setEmail ] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')



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
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Row>
			</Container>
		</Fragment>
	)
}

export default UserSignUp