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

	const handleSubmit = (e) => {
		e.preventDefault();
		userSignUp(email, password, passwordConfirmation)
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

							<Form onSubmit={handleSubmit}>
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
								<Button type='submit' className='float-right' variant="primary">
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