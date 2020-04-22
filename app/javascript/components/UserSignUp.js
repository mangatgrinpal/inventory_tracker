import React, { Fragment, useState } from 'react';
import Loading from './Loading';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { userSignUp } from '../actions/users';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const UserSignUp = ({ 
	userSignUp,
	users: { currentUser, loading, errorMessages } 
}) => {

	const history = useHistory();

	const [email, setEmail ] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [passwordConfirmationError, setPasswordConfirmationError] = useState('');


	const emailErrorHandler = () => {
		setEmailError('Invalid email, please enter a valid email.')
		document.getElementById('emailField').classList.add('invalid-error-frame')
	}

	const passwordErrorHandler = () => {
		setPasswordError('Invalid password length, password must be at least 6 characters.')
		document.getElementById('passwordField').classList.add('invalid-error-frame')
	}

	const passwordConfirmationErrorHandler = () => {
		setPasswordConfirmationError('Passwords must match.')
		document.getElementById('passwordConfirmationField').classList.add('invalid-error-frame')
	}

	const validate = () => {
	
		const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const emailValid = emailRegex.test(email)

		const passwordValid = password.length > 5 && password.length < 128

		const passwordConfirmationValid = (password === passwordConfirmation &&  passwordConfirmation !=  '')

		
		if (!emailValid) {
			emailErrorHandler()
		}

		if (!passwordValid) {
			passwordErrorHandler()
		}

		if (!passwordConfirmationValid) {
			passwordConfirmationErrorHandler()
		}

		if (!emailValid || !passwordValid || !passwordConfirmationValid) {
			return false
		}

		return true;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmailError('')
		setPasswordError('')
		setPasswordConfirmationError('')
		document.getElementById('emailField').classList.remove('invalid-error-frame')
		document.getElementById('passwordField').classList.remove('invalid-error-frame')
		document.getElementById('passwordConfirmationField').classList.remove('invalid-error-frame')

		const isValid = validate();

		if (isValid) {
			userSignUp(email, password, passwordConfirmation, history)
		}
		
	}

	const submitFormOnEnter = e => {

		if (e.key === 'Enter') {
			const isValid = validate()
			if (isValid) {
				e.preventDefault()
				userSignUp(email, password, passwordConfirmation, history)
			}
		}
	}



	return (
		<Fragment>
			{ loading ? 
				<Loading/> :
				<Container>
					<Row>
						<Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}} className='py-5'>
							<h6 className='section-name'>Sign Up</h6>
						</Col>
					</Row>
					<Row>
						<Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}}>

							<Form onSubmit={handleSubmit}>
								<Form.Group>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										id='emailField'
										name='email' 
										type='email'
										placeholder='Email' 
										onChange={(e)=>{setEmail(e.target.value)}}/>
									<Row>
										<Col style={{'color':'red'}}>
											{emailError}
										</Col>
									</Row>
								</Form.Group>

								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control
										id='passwordField'
										name='password' 
										type='password'
										placeholder='Password'
										onChange={(e)=>{setPassword(e.target.value)}}/>
									<Row>
										<Col style={{'color':'red'}}>
											{passwordError}
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control 
										id='passwordConfirmationField'
										name='passwordConfirmation'
										type='password' 
										placeholder='Password confirmation'
										onChange={(e)=>{setPasswordConfirmation(e.target.value)}} />
									<Row>
										<Col style={{'color':'red'}}>
											{passwordConfirmationError}
										</Col>
									</Row>
								</Form.Group>
								<Button type='submit' className='float-right' variant='primary'>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			}
			
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