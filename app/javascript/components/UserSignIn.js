import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserSignIn = () => {

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
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
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

export default UserSignIn