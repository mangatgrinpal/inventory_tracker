import React, { Fragment, useEffect } from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Record = ({ record }) => {

	const { id, attributes: { week_dates, quantity }}  = record;
	console.log(id)
	console.log(quantity.toString())

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