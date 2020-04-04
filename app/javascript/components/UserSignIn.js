import React, { Fragment, useState } from 'react';
import Loading from './Loading';

import { Link, useHistory, useLocation } from 'react-router-dom';

import { connect } from 'react-redux';

import { userSignIn } from '../actions/users';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const UserSignIn = ({ 
	userSignIn,
	users: { currentUser, loading, errorMessages }
}) => {

	const history = useHistory();
	const location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');


	const submitFormOnEnter = e => {
		if (e.key === 'Enter') {
			userSignIn(email, password, history)
		}
	}

	const handleSubmit = (e, email, password, history) => {
		e.preventDefault();
		setEmailError('')
		setPasswordError('')
		document.getElementById('emailField').classList.remove('invalid-error-frame')
		document.getElementById('passwordField').classList.remove('invalid-error-frame')
		const isValid = validate();

		if (isValid) {
			userSignIn(email, password, history)
		}
	}

	const validate = () => {
		

		const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const emailValid = emailRegex.test(email)

		const passwordValid = password.length > 5 && password.length < 128


		if (!emailValid && !passwordValid) {
			setEmailError('Invalid email, please enter a valid email.')
			setPasswordError('Invalid password length, password must be at least 6 characters.')

			document.getElementById('emailField').classList.add('invalid-error-frame')
			document.getElementById('passwordField').classList.add('invalid-error-frame')
			return false
		}
		if (!emailValid) {
			setEmailError('Invalid email, please enter a valid email.')
			document.getElementById('emailField').classList.add('invalid-error-frame')
			return false
		}

		if (!passwordValid) {
			setPasswordError('Invalid password length, password must be at least 6 characters.')
			document.getElementById('passwordField').classList.add('invalid-error-frame')
			return false
		}

		return true;
	}

	return (
		<Fragment>
			{loading ?
				<Loading /> :

				<Container>
					<Row>
						<Col 
							xs={{span: 8, offset: 2}} 
							md={{span: 4, offset: 4}} 
							className='py-5'>
							<h6 className='section-name'>Sign In</h6>
						</Col>
					</Row>
					
					
					<Row>
						<Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}}>
							<Form 
								onKeyPress={submitFormOnEnter} 
								onSubmit={(e)=>{handleSubmit(e, email, password, history)}}
								className='clearfix'>
								<Form.Group>
									<Form.Label className='form-label'>Email address</Form.Label>
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
									<Form.Label className='form-label'>Password</Form.Label>
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
								
								<Button type='submit' className='float-right' variant='primary'>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
					<Row className='pt-3'>
						<Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}}>
							Don't have an account? <Link to='/sign-up'>Sign up now</Link>
						</Col>
					</Row>
				</Container>

			}
			
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