import React, { Fragment, useState } from 'react';
import Loading from './Loading';

import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

import { userSignIn } from '../actions/users';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserSignIn = ({ 
	userSignIn,
	users: { currentUser, loading, errorMessages }
}) => {

	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitFormOnEnter = e => {
		if (e.key === 'Enter') {
			userSignIn(email, password, history)
		}
	}

	const handleClick = (e, email, password, history) => {
		e.preventDefault();
		userSignIn(email, password, history)
	}

	return (
		<Fragment>
			{loading ?
				<Loading /> :

				<Container>
					<Row>
						<Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}} className='py-5'>
							<h6 className='section-name'>Sign In</h6>
						</Col>
					</Row>
					{ errorMessages.length > 0 ? 
					<Row>
						<Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}}>
							{errorMessages.map((error, index) => {
								return(
									<p key={index} className='text-danger'>{error}</p>
								)
							})}
						</Col>
					</Row> :
					<div/>
					}
					<Row>
						<Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}}>
							<Form onKeyPress={submitFormOnEnter} className='clearfix'>
								<Form.Group>
									<Form.Label className='form-label'>Email address</Form.Label>
									<Form.Control type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
								</Form.Group>

								<Form.Group>
									<Form.Label className='form-label'>Password</Form.Label>
									<Form.Control type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
								</Form.Group>
								<Button className='float-right' variant='primary' onClick={(e)=>{handleClick(e, email, password, history)}}>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
					{/*<Row>
						<Col>
							Don't have an account? <Link to='/sign-up'>Sign up</Link>
						</Col>
					</Row>*/}
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