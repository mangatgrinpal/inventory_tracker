import React, { Fragment, useEffect } from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Record = ({ record }) => {

	const { id, quantity }  = record;

	return (
		<Fragment>
			<Row>
				<Col>
					
					{quantity}
				</Col>
			</Row>
		</Fragment>
	)
}

export default Record